namespace RecruitmentTask.Services
{
    using System.Net.Http;
    using System.Threading.Tasks;
    using Microsoft.Extensions.Options;
    using Newtonsoft.Json;

    public class WeatherService : HttpService, IWeatherService
    {
        public WeatherService(IHttpClientFactory httpClientFactory, IOptions<Config> apiConfig)
            : base(httpClientFactory, apiConfig)
        {
        }

        public async Task<WeatherModel> GetWeatherDataFromGeoCoords(GeoCoords coords)
        {
            using var httpClient = CreateHttpClient(_apiConfig.Value.OneCallUrl);
            var response =
                await httpClient.GetAsync(
                    $"?lat={coords.Latitude}&lon={coords.Longitude}&appid={_apiConfig.Value.Key}&units=metric");
            response.EnsureSuccessStatusCode();
            var data = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<WeatherModel>(data);
        }
    }
}
