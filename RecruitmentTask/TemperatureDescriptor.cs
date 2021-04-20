namespace RecruitmentTask
{
    public static class TemperatureDescriptor
    {
        public static string GetDescriptionFromTemperature(double temperature)
        {
            if (temperature >= 50)
            {
                return Summaries.Scorching.ToString();
            }

            if (temperature >= 40)
            {
                return Summaries.Sweltering.ToString();
            }

            if (temperature >= 30)
            {
                return Summaries.Hot.ToString();
            }

            if (temperature >= 20)
            {
                return Summaries.Balmy.ToString();
            }

            if (temperature >= 10)
            {
                return Summaries.Warm.ToString();
            }

            if (temperature >= 0)
            {
                return Summaries.Mild.ToString();
            }

            if (temperature >= -10)
            {
                return Summaries.Cool.ToString();
            }

            if (temperature >= -20)
            {
                return Summaries.Chilly.ToString();
            }

            if (temperature >= -30)
            {
                return Summaries.Bracing.ToString();
            }

            return Summaries.Freezing.ToString();
        }
    }
}

internal enum Summaries
{
    Freezing,
    Bracing,
    Chilly,
    Cool,
    Mild,
    Warm,
    Balmy,
    Hot,
    Sweltering,
    Scorching
}
