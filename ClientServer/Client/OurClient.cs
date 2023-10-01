using System.Net.Sockets;
using System.Text;

namespace Client
{
    class OurClient
    {
        private TcpClient client; // переменная с пом. кот. сможем отправлять данные с клиента на сервер на протоколе Tcp
        private StreamWriter sWriter;  // поток клиента на сервер
        private StreamReader sReader;  // поток для чтения

        public OurClient()
        {
            client = new TcpClient("127.0.0.1", 5555);
            sWriter = new StreamWriter(client.GetStream(), Encoding.UTF8);
            sReader = new StreamReader(client.GetStream(), Encoding.UTF8);

            HandleCommunication();
        }

        void HandleCommunication() // метод для безразрывного соединения
        {
            while (true)  // бесконечный цикл
            {
                Console.Write("> ");
                string? message = Console.ReadLine();
                sWriter.WriteLine(message); // сообщение серверу(пока не отправлено)
                sWriter.Flush(); // отправить НЕМЕДЛЕННО

                string? answerServer = sReader.ReadLine();
                Console.WriteLine($"Сервер ответил -> {answerServer}");
            }
        }


    }
}