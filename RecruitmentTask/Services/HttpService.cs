namespace RecruitmentTask.Services
{
    using System;
    using System.Net.Http;
    using Microsoft.Extensions.Options;

    public abstract class HttpService
    {
        private readonly IHttpClientFactory _httpClientFactory;
        protected readonly IOptions<Config> _apiConfig;

        protected HttpService(IHttpClientFactory httpClientFactory, IOptions<Config> apiConfig)
        {
            _httpClientFactory = httpClientFactory;
            _apiConfig = apiConfig;
        }

        protected HttpClient CreateHttpClient(string url)
        {
            var _httpClient = _httpClientFactory.CreateClient("HttpServiceClient");
            _httpClient.BaseAddress = new Uri(url);
            return _httpClient;
        }
    }
}
