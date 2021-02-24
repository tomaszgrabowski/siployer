using NUnit.Framework;

namespace RecruitmentTask.Tests
{
    public class ForecastTests
    {
        [SetUp]
        public void Setup()
        {

        }

        [Test]
        [TestCase(35, "hot")]
        [TestCase(10, "Warn")]
        [TestCase(5, "Mild")]
        [TestCase(-5, "Cold")]
        public void Test1()
        {
            Assert.Pass();
        }
    }
}