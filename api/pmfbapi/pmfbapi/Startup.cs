using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Azure.KeyVault;
using Microsoft.Azure.Services.AppAuthentication;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace pmfbapi
{
    public class Startup
    {
        private AzureServiceTokenProvider azureServiceTokenProvider;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

            AppConfigStore.VaultUri = this.Configuration.GetValue<string>("VaultUri");

            this.azureServiceTokenProvider = new AzureServiceTokenProvider(); //Using Managed Identity Service

            InitializeAppConfigStore(azureServiceTokenProvider).Wait();
        }

        private async Task InitializeAppConfigStore(
            AzureServiceTokenProvider azureServiceTokenProvider)
        {
            // Setup KeyVault client
            var keyVaultClient = new KeyVaultClient(
                new KeyVaultClient.AuthenticationCallback(
                    azureServiceTokenProvider.KeyVaultTokenCallback));

            //SqlDb connection string
            var dbConnStr = await keyVaultClient.GetSecretAsync(
                $"{AppConfigStore.VaultUri}secrets/dbconnstring/")
                .ConfigureAwait(false);
            AppConfigStore.DbConnectionString = dbConnStr.Value;

            AppConfigStore.ApiKey =
                this.Configuration.GetValue<string>("ApiKey");
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            services.AddDbContext<PmfbDbContext>(
                options => options.UseSqlServer(AppConfigStore.DbConnectionString));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
        }
    }
}
