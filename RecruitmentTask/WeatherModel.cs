namespace RecruitmentTask.Services
{
    using System.Collections.Generic;
    using System.Text.Json.Serialization;

    public class Weather
    {
        [JsonPropertyName("id")] public int Id { get; set; }

        [JsonPropertyName("main")] public string Main { get; set; }

        [JsonPropertyName("description")] public string Description { get; set; }

        [JsonPropertyName("icon")] public string Icon { get; set; }
    }

    public class Current
    {
        [JsonPropertyName("dt")] public int Dt { get; set; }

        [JsonPropertyName("sunrise")] public int Sunrise { get; set; }

        [JsonPropertyName("sunset")] public int Sunset { get; set; }

        [JsonPropertyName("temp")] public double Temp { get; set; }

        [JsonPropertyName("feels_like")] public double FeelsLike { get; set; }

        [JsonPropertyName("pressure")] public int Pressure { get; set; }

        [JsonPropertyName("humidity")] public int Humidity { get; set; }

        [JsonPropertyName("dew_point")] public double DewPoint { get; set; }

        [JsonPropertyName("uvi")] public double Uvi { get; set; }

        [JsonPropertyName("clouds")] public int Clouds { get; set; }

        [JsonPropertyName("visibility")] public int Visibility { get; set; }

        [JsonPropertyName("wind_speed")] public double WindSpeed { get; set; }

        [JsonPropertyName("wind_deg")] public int WindDeg { get; set; }

        [JsonPropertyName("wind_gust")] public double WindGust { get; set; }

        [JsonPropertyName("weather")] public List<Weather> Weather { get; } = new List<Weather>();
    }

    public class Minutely
    {
        [JsonPropertyName("dt")] public int Dt { get; set; }

        [JsonPropertyName("precipitation")] public double Precipitation { get; set; }
    }

    public class Rain
    {
        [JsonPropertyName("1h")] public double _1h { get; set; }
    }

    public class Hourly
    {
        [JsonPropertyName("dt")] public int Dt { get; set; }

        [JsonPropertyName("temp")] public double Temp { get; set; }

        [JsonPropertyName("feels_like")] public double FeelsLike { get; set; }

        [JsonPropertyName("pressure")] public int Pressure { get; set; }

        [JsonPropertyName("humidity")] public int Humidity { get; set; }

        [JsonPropertyName("dew_point")] public double DewPoint { get; set; }

        [JsonPropertyName("uvi")] public double Uvi { get; set; }

        [JsonPropertyName("clouds")] public int Clouds { get; set; }

        [JsonPropertyName("visibility")] public int Visibility { get; set; }

        [JsonPropertyName("wind_speed")] public double WindSpeed { get; set; }

        [JsonPropertyName("wind_deg")] public int WindDeg { get; set; }

        [JsonPropertyName("wind_gust")] public double WindGust { get; set; }

        [JsonPropertyName("weather")] public List<Weather> Weather { get; } = new List<Weather>();

        [JsonPropertyName("pop")] public double Pop { get; set; }

        [JsonPropertyName("rain")] public Rain Rain { get; set; }
    }

    public class Temp
    {
        [JsonPropertyName("day")] public double Day { get; set; }

        [JsonPropertyName("min")] public double Min { get; set; }

        [JsonPropertyName("max")] public double Max { get; set; }

        [JsonPropertyName("night")] public double Night { get; set; }

        [JsonPropertyName("eve")] public double Eve { get; set; }

        [JsonPropertyName("morn")] public double Morn { get; set; }
    }

    public class FeelsLike
    {
        [JsonPropertyName("day")] public double Day { get; set; }

        [JsonPropertyName("night")] public double Night { get; set; }

        [JsonPropertyName("eve")] public double Eve { get; set; }

        [JsonPropertyName("morn")] public double Morn { get; set; }
    }

    public class Daily
    {
        [JsonPropertyName("dt")] public int Dt { get; set; }

        [JsonPropertyName("sunrise")] public int Sunrise { get; set; }

        [JsonPropertyName("sunset")] public int Sunset { get; set; }

        [JsonPropertyName("moonrise")] public int Moonrise { get; set; }

        [JsonPropertyName("moonset")] public int Moonset { get; set; }

        [JsonPropertyName("moon_phase")] public double MoonPhase { get; set; }

        [JsonPropertyName("temp")] public Temp Temp { get; set; }

        [JsonPropertyName("feels_like")] public FeelsLike FeelsLike { get; set; }

        [JsonPropertyName("pressure")] public int Pressure { get; set; }

        [JsonPropertyName("humidity")] public int Humidity { get; set; }

        [JsonPropertyName("dew_point")] public double DewPoint { get; set; }

        [JsonPropertyName("wind_speed")] public double WindSpeed { get; set; }

        [JsonPropertyName("wind_deg")] public int WindDeg { get; set; }

        [JsonPropertyName("wind_gust")] public double WindGust { get; set; }

        [JsonPropertyName("weather")] public List<Weather> Weather { get; } = new List<Weather>();

        [JsonPropertyName("clouds")] public int Clouds { get; set; }

        [JsonPropertyName("pop")] public double Pop { get; set; }

        [JsonPropertyName("rain")] public double Rain { get; set; }

        [JsonPropertyName("uvi")] public double Uvi { get; set; }
    }

    public class WeatherModel
    {
        [JsonPropertyName("lat")] public double Lat { get; set; }

        [JsonPropertyName("lon")] public double Lon { get; set; }

        [JsonPropertyName("timezone")] public string Timezone { get; set; }

        [JsonPropertyName("timezone_offset")] public int TimezoneOffset { get; set; }

        [JsonPropertyName("current")] public Current Current { get; set; }

        [JsonPropertyName("minutely")] public List<Minutely> Minutely { get; } = new List<Minutely>();

        [JsonPropertyName("hourly")] public List<Hourly> Hourly { get; } = new List<Hourly>();

        [JsonPropertyName("daily")] public List<Daily> Daily { get; } = new List<Daily>();
    }
}
