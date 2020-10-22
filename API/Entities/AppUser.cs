namespace API.Entities
{
    public class AppUser
    {
        public int ID { get; set; }
        public string UserName { get; set; }
        public byte[] PassswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}