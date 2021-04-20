namespace RecruitmentTask
{
    using System;

    public static class DateHelpers
    {
        public static DateTime GetDateTimeFromEpoch(long epoch)
        {
            return new DateTime(1970, 1, 1, 0, 0, 0, 0).AddSeconds(epoch);
        }
    }
}
