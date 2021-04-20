namespace RecruitmentTask.Services
{
    using System.Threading.Tasks;

    public interface IWeatherService
    {
        Task<WeatherModel> GetWeatherDataFromGeoCoords(GeoCoords coords);
    }
}