import NavBar from "@/components/NavBar";
import GiftCard from "@/components/GiftCard";
import { toast } from "@/components/ui/use-toast";

const CardsPage = () => {
  const handleBuy = (price: number) => {
    toast({
      title: "Карта добавлена в корзину",
      description: `Apple Gift Card ${price}₽ добавлена в вашу корзину`,
    });
  };

  return (
    <>
      <NavBar />
      <main className="pt-12">
        <section className="min-h-screen bg-apple-gray py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 pt-8">
              <h1 className="text-4xl font-semibold text-apple-dark mb-4">
                Выберите номинал карты
              </h1>
              <p className="text-gray-500 text-lg">
                Наши подарочные карты доступны в различных номиналах, чтобы соответствовать вашим потребностям
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <GiftCard price={1000} onClick={() => handleBuy(1000)} />
              <GiftCard price={2500} onClick={() => handleBuy(2500)} />
              <GiftCard price={5000} onClick={() => handleBuy(5000)} />
            </div>

            <div className="max-w-3xl mx-auto mt-16 text-center">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-medium text-apple-dark mb-3">
                  Что можно купить с Apple Gift Card?
                </h2>
                <ul className="text-left text-gray-500 space-y-2">
                  <li className="flex items-start">
                    <span className="text-apple-blue mr-2">✓</span>
                    <span>Приложения и игры из App Store</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-apple-blue mr-2">✓</span>
                    <span>Музыку, фильмы и TV-шоу</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-apple-blue mr-2">✓</span>
                    <span>iCloud+ и другие подписки Apple</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-apple-blue mr-2">✓</span>
                    <span>Аксессуары и устройства в Apple Store</span>
                  </li>
                </ul>
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

export default CardsPage;
