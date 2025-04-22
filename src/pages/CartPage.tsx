import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CartPage = () => {
  const [nickname, setNickname] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  
  const handlePayment = () => {
    // Перенаправление на сервер SAMP после ввода данных карты
    window.location.href = `http://188.127.241.74:3895/payment?nickname=${nickname}`;
  };

  return (
    <>
      <NavBar />
      <main className="pt-12 min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto pt-8">
              <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">
                Оформление заказа
              </h1>
              
              <div className="bg-black/50 rounded-xl p-6 shadow-md mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Корзина
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-white">Админ 5 LVL</h3>
                      <p className="text-gray-400 text-sm">Привилегия администратора</p>
                    </div>
                    <div className="text-red-500 font-bold">
                      431₽
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-gray-700 pt-4 mt-4">
                    <span className="text-lg font-bold">Итого:</span>
                    <span className="text-xl font-bold text-red-500">431₽</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/50 rounded-xl p-6 shadow-md mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Данные игрока
                </h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="nickname" className="text-gray-300">Ваш никнейм на сервере</label>
                    <Input
                      id="nickname"
                      placeholder="Введите ваш никнейм"
                      className="bg-gray-800 border-gray-700 text-white"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                    />
                    <p className="text-gray-500 text-sm">
                      Укажите точный никнейм, который вы используете на сервере
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/50 rounded-xl p-6 shadow-md mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Данные карты
                </h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="cardNumber" className="text-gray-300">Номер карты</label>
                    <Input
                      id="cardNumber"
                      placeholder="XXXX XXXX XXXX XXXX"
                      className="bg-gray-800 border-gray-700 text-white"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="cardExpiry" className="text-gray-300">Срок действия</label>
                      <Input
                        id="cardExpiry"
                        placeholder="ММ/ГГ"
                        className="bg-gray-800 border-gray-700 text-white"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="cardCVV" className="text-gray-300">CVV код</label>
                      <Input
                        id="cardCVV"
                        placeholder="XXX"
                        type="password"
                        className="bg-gray-800 border-gray-700 text-white"
                        value={cardCVV}
                        onChange={(e) => setCardCVV(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  className="bg-red-600 hover:bg-red-700 rounded-md px-8 py-6 h-auto w-full max-w-md animate-pulse"
                  onClick={handlePayment}
                  disabled={!nickname || !cardNumber || !cardExpiry || !cardCVV}
                >
                  <span className="text-base">Перейти к оплате</span>
                </Button>
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

export default CartPage;
