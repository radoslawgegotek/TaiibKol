namespace KolokwiumApiRG.Models
{
    public class Mouse
    {
        private static int _id = 1;

        public Mouse()
        {
            ID = _id++;
        }

        public int ID { get; private set; }
        public string Model { get; set; }
        public int DPI { get; set; }
    }
}
