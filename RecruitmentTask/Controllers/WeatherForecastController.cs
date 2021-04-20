using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace RecruitmentTask.Controllers
{
    using Services;

    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        private readonly IGeoCodingService _geoCodingService;
        private readonly IWeatherService _weatherService;
        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(IGeoCodingService geoCodingService, IWeatherService weatherService,
            ILogger<WeatherForecastController> logger)
        {
            _geoCodingService = geoCodingService;
            _weatherService = weatherService;
            _logger = logger;
        }

        [HttpGet("{city}")]
        public async Task<IActionResult> Get([FromRoute] string city)
        {
            return await TryGetWeatherFromCity(city);
        }

        private async Task<IActionResult> TryGetWeatherFromCity(string city)
        {
            try
            {
                var coords = await GetCoordsFromCity(city);
                var weather = await GetWeatherForCoords(coords);

                return Ok(weather);
            }
            catch (GeoCodingServiceException e)
            {
                _logger.LogWarning(e.ToString());
                return BadRequest("No such city.");
            }
            catch (Exception e)
            {
                _logger.LogError(e.ToString());
                return StatusCode(500, "Unexpected error occured, we are working to fix this.");
            }
        }

        private async Task<WeatherForecast> GetWeatherForCoords(GeoCoords coords)
        {
            var weatherModel = await _weatherService.GetWeatherDataFromGeoCoords(coords);
            var weather = new WeatherForecast()
            {
                City = coords.Name,
                Date = DateHelpers.GetDateTimeFromEpoch(weatherModel.Current.Dt),
                TemperatureC = Convert.ToSByte(weatherModel.Current.Temp),
                Summary = TemperatureDescriptor.GetDescriptionFromTemperature(weatherModel.Current.Temp),
                CountryCode = coords.Country
            };
            return weather;
        }

        private async Task<GeoCoords> GetCoordsFromCity(string city)
        {
            var geoCodingModels = await _geoCodingService.GetCityGeoDataFromName(city);
            var coords = new GeoCoords()
            {
                Latitude = geoCodingModels[0].Lat,
                Longitude = geoCodingModels[0].Lon,
                Name = geoCodingModels[0].Name,
                Country = geoCodingModels[0].Country
            };
            return coords;
        }
    }
}
