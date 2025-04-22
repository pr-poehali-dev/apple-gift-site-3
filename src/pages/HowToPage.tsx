import NavBar from "@/components/NavBar";
import { Separator } from "@/components/ui/separator";

const HowToPage = () => {
  return (
    <>
      <NavBar />
      <main className="pt-12">
        <section className="min-h-screen bg-apple-gray py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto pt-8">
              <h1 className="text-4xl font-semibold text-apple-dark mb-4 text-center">
                Как использовать Apple Gift Card
              </h1>
              <p className="text-gray-500 text-lg text-center mb-12">
                Простое руководство по активации и использованию подарочной карты
              </p>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-medium text-apple-dark mb-6">
                    Шаги по активации
                  </h2>

                  <ol className="space-y-8">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-apple-blue text-white flex items-center justify-center font-medium">
                        1
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-apple-dark mb-2">Войдите в свой Apple ID</h3>
                        <p className="text-gray-500">
                          Откройте App Store, iTunes Store или Apple Books и убедитесь, что вы вошли в свою учетную запись Apple ID.
                        </p>
                      </div>
                    </li>

                    <Separator />

                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-apple-blue text-white flex items-center justify-center font-medium">
                        2
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-apple-dark mb-2">Найдите опцию активации</h3>
                        <p className="text-gray-500">
                          В App Store перейдите к своему профилю и выберите "Активировать подарочную карту или код".
                          В iTunes Store прокрутите вниз и нажмите "Активировать".
                        </p>
                      </div>
                    </li>

                    <Separator />

                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-apple-blue text-white flex items-center justify-center font-medium">
                        3
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-apple-dark mb-2">Введите код активации</h3>
                        <p className="text-gray-500">
                          Введите 16-значный код, который вы получили в электронном письме после покупки карты. 
                          Вы также можете отсканировать код с помощью камеры вашего устройства.
                        </p>
                      </div>
                    </li>

                    <Separator />

                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-apple-blue text-white flex items-center justify-center font-medium">
                        4
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-apple-dark mb-2">Подтвердите активацию</h3>
                        <p className="text-gray-500">
                          Нажмите "Активировать" или "Подтвердить". Средства будут добавлены на ваш счет Apple ID и будут 
                          автоматически использоваться при следующей покупке.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="bg-apple-gray/50 p-8 border-t border-gray-200">
                  <h2 className="text-2xl font-medium text-apple-dark mb-6">
                    Дополнительная информация
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-apple-dark mb-2">Срок действия</h3>
                      <p className="text-gray-500">
                        Apple Gift Cards не имеют срока действия и могут быть использованы в любое время.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg text-apple-dark mb-2">Остаток средств</h3>
                      <p className="text-gray-500">
                        Чтобы проверить остаток средств, перейдите в настройки своей учетной записи Apple ID.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg text-apple-dark mb-2">Безопасность</h3>
                      <p className="text-gray-500">
                        Никогда не передавайте код активации посторонним лицам. Apple никогда не запрашивает ваш код по телефону или электронной почте.
                      </p>
                    </div>
                  </div>
                </div>
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

export default HowToPage;
