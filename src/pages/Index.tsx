import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <NavBar />
      <main className="pt-12">
        {/* Hero Section */}
        <section className="min-h-[80vh] hero-gradient flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-semibold text-apple-dark mt-10 mb-4 tracking-tight">
            Apple Gift Card
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-8">
            Идеальный подарок для тех, кто любит продукты Apple
          </p>
          <div className="relative w-full max-w-xl h-64 mb-8">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" width="320" height="200">
                  <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0071e3" />
                    <stop offset="100%" stopColor="#40a0ff" />
                  </linearGradient>
                  <rect x="10" y="10" width="300" height="180" rx="16" ry="16" fill="url(#heroGradient)" />
                  <path d="M50,80 h220 M50,120 h120" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="40" cy="40" r="15" fill="white" fillOpacity="0.5" />
                </svg>
                <div className="absolute bottom-10 right-10 text-white font-bold text-3xl">
                  Gift Card
                </div>
              </div>
            </div>
          </div>
          <Link to="/cards">
            <Button className="bg-apple-blue hover:bg-apple-blue/90 rounded-full px-8 py-6 h-auto">
              <span className="text-base">Купить сейчас</span>
            </Button>
          </Link>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12 text-apple-dark">
              Почему Apple Gift Card?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-apple-blue/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-apple-blue">
                    <path d="M12 1v22M1 12h22" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-apple-dark">Универсальность</h3>
                <p className="text-gray-500">Подходит для покупки приложений, музыки, фильмов, игр и подписок</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-apple-blue/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-apple-blue">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-apple-dark">Разные номиналы</h3>
                <p className="text-gray-500">Доступны карты различного номинала на любой бюджет</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-apple-blue/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-apple-blue">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-apple-dark">Мгновенная доставка</h3>
                <p className="text-gray-500">Моментальное получение кода активации на электронную почту</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-apple-gray py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-gray-500">
            <p className="mb-2">© 2023 Apple Gift Cards. Все права защищены.</p>
            <p>Apple и логотип Apple являются товарными знаками Apple Inc.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
