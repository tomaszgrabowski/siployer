namespace RecruitmentTask.Services
{
    using System.Threading.Tasks;

    public interface IGeoCodingService
    {
        Task<GeoCodingModel[]> GetCityGeoDataFromName(string cityName);
    }
}
