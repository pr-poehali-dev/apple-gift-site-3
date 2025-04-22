import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <NavBar />
      <main className="pt-12 min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-red-600 mt-10 mb-4 tracking-tight">
            ДОНАТ САМП
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
            Получите преимущества на нашем сервере
          </p>
          <div className="relative w-full max-w-xl h-64 mb-8">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full">
              <img 
                src="/placeholder.svg" 
                alt="SAMP сервер" 
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
          <Link to="/donat">
            <Button className="bg-red-600 hover:bg-red-700 rounded-md px-8 py-6 h-auto">
              <span className="text-base">Купить привилегии</span>
            </Button>
          </Link>
        </section>

        {/* Features */}
        <section className="py-16 bg-black/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Преимущества доната
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600/20 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                    <path d="M12 2v20M2 12h20" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-white">Доступ к командам</h3>
                <p className="text-gray-400">Используйте специальные админ-команды на сервере</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600/20 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                    <path d="M20 7h-9M14 17H5" />
                    <circle cx="17" cy="17" r="3" />
                    <circle cx="7" cy="7" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-white">Особый статус</h3>
                <p className="text-gray-400">Выделяйтесь среди других игроков на сервере</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600/20 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-white">Эксклюзивный контент</h3>
                <p className="text-gray-400">Получите доступ к уникальным возможностям</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-gray-500">
            <p className="mb-2">© 2023 SAMP Донат. Все права защищены.</p>
            <p>IP сервера: 188.127.241.74:3895</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
