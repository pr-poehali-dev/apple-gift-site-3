import NavBar from "@/components/NavBar";
import AdminCard from "@/components/AdminCard";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const DonatPage = () => {
  const navigate = useNavigate();

  const handleBuy = (level: number, price: number) => {
    toast({
      title: "Привилегия добавлена в корзину",
      description: `Админ ${level} LVL (${price}₽) добавлен в вашу корзину`,
    });
    
    // Перенаправление в корзину после добавления товара
    setTimeout(() => {
      navigate('/cart');
    }, 1000);
  };

  const adminLevels = [
    { level: 1, price: 142 },
    { level: 2, price: 212 },
    { level: 3, price: 364 },
    { level: 4, price: 399 },
    { level: 5, price: 431 },
    { level: 6, price: 532 },
    { level: 8, price: 581 },
    { level: 9, price: 600 },
    { level: 10, price: 782 },
    { level: 11, price: 972 },
    { level: 12, price: 1212 },
    { level: 0, price: 1423, title: "Основатель" },
    { level: 0, price: 3023, title: "Владелец Сервера" }
  ];

  return (
    <>
      <NavBar />
      <main className="pt-12 min-h-screen bg-gradient-to-b from-black to-gray-900">
        <section className="min-h-screen py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 pt-8">
              <h1 className="text-4xl font-bold text-red-600 mb-4">
                Выберите привилегию
              </h1>
              <p className="text-gray-300 text-lg">
                Разные уровни привилегий с разными возможностями на сервере
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {adminLevels.map((admin, index) => 
                admin.level > 0 ? (
                  <AdminCard 
                    key={index}
                    level={admin.level} 
                    price={admin.price} 
                    onClick={() => handleBuy(admin.level, admin.price)} 
                  />
                ) : (
                  <div key={index} className="flex flex-col bg-gradient-to-b from-red-900 to-black/80 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-center h-40 p-4">
                      <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="80" height="80">
                          <linearGradient id="vipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FFD700" />
                            <stop offset="100%" stopColor="#FFA500" />
                          </linearGradient>
                          <path d="M64,16 L8,48 L8,96 L64,128 L120,96 L120,48 L64,16 Z" fill="url(#vipGradient)" />
                          <path d="M64,40 L40,55 L40,85 L64,100 L88,85 L88,55 L64,40 Z" fill="#000" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col gap-2">
                      <h3 className="text-lg font-bold text-white">
                        {admin.title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        Максимальные возможности и статус на сервере
                      </p>
                      <div className="text-yellow-500 font-bold text-xl mt-1">
                        {new Intl.NumberFormat('ru-RU').format(admin.price)}₽
                      </div>
                      <button 
                        className="mt-2 bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded"
                        onClick={() => handleBuy(0, admin.price)}
                      >
                        Купить
                      </button>
                    </div>
                  </div>
                )
              )}
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

export default DonatPage;
