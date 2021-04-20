namespace RecruitmentTask.Services
{
    using System;
    using System.Net.Http;
    using System.Threading.Tasks;
    using Microsoft.Extensions.Options;
    using Newtonsoft.Json;

    public class GeoCodingService : HttpService, IGeoCodingService
    {
        public GeoCodingService(IHttpClientFactory httpClientFactory, IOptions<Config> apiConfig)
            : base(httpClientFactory, apiConfig)
        {
        }

        public async Task<GeoCodingModel[]> GetCityGeoDataFromName(string cityName)
        {
            using var httpClient = CreateHttpClient(_apiConfig.Value.GeoCodingUrl);
            var response = await httpClient.GetAsync($"?q={cityName}&appid={_apiConfig.Value.Key}&limit=1");
            response.EnsureSuccessStatusCode();
            var data = await response.Content.ReadAsStringAsync();
            ValidateResponse(data);
            return JsonConvert.DeserializeObject<GeoCodingModel[]>(data);
        }

        private static void ValidateResponse(string data)
        {
            if (data == "[]")
            {
                throw new GeoCodingServiceException("No such city.");
            }
        }
    }

    public class GeoCodingServiceException : Exception
    {
        public GeoCodingServiceException(string message): base(message)
        {
        }
    }
}
