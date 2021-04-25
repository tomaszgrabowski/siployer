// Root myDeserializedClass = JsonSerializer.Deserialize<Root>(myJsonResponse);
namespace RecruitmentTask
{
    using System.Text.Json.Serialization;

    public class LocalNames
    {
        [JsonPropertyName("af")] public string Af { get; set; }

        [JsonPropertyName("ar")] public string Ar { get; set; }

        [JsonPropertyName("ascii")] public string Ascii { get; set; }

        [JsonPropertyName("az")] public string Az { get; set; }

        [JsonPropertyName("bg")] public string Bg { get; set; }

        [JsonPropertyName("ca")] public string Ca { get; set; }

        [JsonPropertyName("da")] public string Da { get; set; }

        [JsonPropertyName("de")] public string De { get; set; }

        [JsonPropertyName("el")] public string El { get; set; }

        [JsonPropertyName("en")] public string En { get; set; }

        [JsonPropertyName("eu")] public string Eu { get; set; }

        [JsonPropertyName("fa")] public string Fa { get; set; }

        [JsonPropertyName("feature_name")] public string FeatureName { get; set; }

        [JsonPropertyName("fi")] public string Fi { get; set; }

        [JsonPropertyName("fr")] public string Fr { get; set; }

        [JsonPropertyName("gl")] public string Gl { get; set; }

        [JsonPropertyName("he")] public string He { get; set; }

        [JsonPropertyName("hr")] public string Hr { get; set; }

        [JsonPropertyName("hu")] public string Hu { get; set; }

        [JsonPropertyName("id")] public string Id { get; set; }

        [JsonPropertyName("it")] public string It { get; set; }

        [JsonPropertyName("ja")] public string Ja { get; set; }

        [JsonPropertyName("la")] public string La { get; set; }

        [JsonPropertyName("lt")] public string Lt { get; set; }

        [JsonPropertyName("mk")] public string Mk { get; set; }

        [JsonPropertyName("nl")] public string Nl { get; set; }

        [JsonPropertyName("no")] public string No { get; set; }

        [JsonPropertyName("pl")] public string Pl { get; set; }

        [JsonPropertyName("pt")] public string Pt { get; set; }

        [JsonPropertyName("ro")] public string Ro { get; set; }

        [JsonPropertyName("ru")] public string Ru { get; set; }

        [JsonPropertyName("sk")] public string Sk { get; set; }

        [JsonPropertyName("sl")] public string Sl { get; set; }

        [JsonPropertyName("sr")] public string Sr { get; set; }

        [JsonPropertyName("th")] public string Th { get; set; }

        [JsonPropertyName("tr")] public string Tr { get; set; }
    }

    public class GeoCodingModel
    {
        [JsonPropertyName("name")] public string Name { get; set; }

        [JsonPropertyName("local_names")] public LocalNames LocalNames { get; set; }

        [JsonPropertyName("lat")] public double Lat { get; set; }

        [JsonPropertyName("lon")] public double Lon { get; set; }

        [JsonPropertyName("country")] public string Country { get; set; }
    }
}

