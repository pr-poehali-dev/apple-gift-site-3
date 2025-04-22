import NavBar from "@/components/NavBar";

const HowToPage = () => {
  return (
    <>
      <NavBar />
      <main className="pt-12 min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto pt-8">
              <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">
                Инструкция по покупке
              </h1>
              
              <div className="bg-black/50 rounded-xl p-6 shadow-md mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Как приобрести привилегию?
                </h2>
                <ol className="text-gray-300 space-y-4 list-decimal list-inside">
                  <li className="pl-2">
                    <span className="font-semibold text-white">Выберите привилегию</span>
                    <p className="ml-6 mt-1">В разделе "Привилегии" выберите подходящий уровень доступа</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-white">Добавьте в корзину</span>
                    <p className="ml-6 mt-1">Нажмите кнопку "Купить" на выбранной привилегии</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-white">Перейдите к оплате</span>
                    <p className="ml-6 mt-1">Сайт автоматически перенаправит вас в корзину для оплаты</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-white">Введите данные</span>
                    <p className="ml-6 mt-1">Укажите ваш никнейм на сервере и выберите способ оплаты</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-white">Оплатите заказ</span>
                    <p className="ml-6 mt-1">Следуйте инструкциям платежной системы для завершения оплаты</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-semibold text-white">Получите привилегию</span>
                    <p className="ml-6 mt-1">После успешной оплаты привилегия будет активирована автоматически</p>
                  </li>
                </ol>
              </div>
              
              <div className="bg-black/50 rounded-xl p-6 shadow-md mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Как активировать привилегию?
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    После успешной оплаты ваша привилегия будет автоматически активирована на сервере.
                    Для проверки привилегии выполните следующие действия:
                  </p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Зайдите на сервер по IP: <span className="bg-gray-800 px-2 py-1 rounded text-red-500">188.127.241.74:3895</span></li>
                    <li>Введите команду <span className="bg-gray-800 px-2 py-1 rounded">/stats</span> для проверки вашего статуса</li>
                    <li>Для просмотра доступных команд введите <span className="bg-gray-800 px-2 py-1 rounded">/ahelp</span></li>
                  </ol>
                </div>
              </div>
              
              <div className="bg-black/50 rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Проблемы с оплатой или активацией?
                </h2>
                <div className="text-gray-300">
                  <p className="mb-4">
                    Если у вас возникли проблемы с оплатой или активацией привилегии, свяжитесь с администрацией:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Через Discord: <span className="bg-gray-800 px-2 py-1 rounded">discord.gg/sampserver</span></li>
                    <li>В VK: <span className="bg-gray-800 px-2 py-1 rounded">vk.com/sampserver</span></li>
                    <li>По почте: <span className="bg-gray-800 px-2 py-1 rounded">support@sampserver.ru</span></li>
                  </ul>
                </div>
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

export default HowToPage;
