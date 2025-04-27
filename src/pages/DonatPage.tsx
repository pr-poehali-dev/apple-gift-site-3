import AdminCard from "@/components/AdminCard";
import NavBar from "@/components/NavBar";

const ADMIN_LEVELS = [
  { id: 1, level: 1, price: 142, description: "Базовый уровень администратора" },
  { id: 2, level: 2, price: 212, description: "Расширенные возможности модерации" },
  { id: 3, level: 3, price: 364, description: "Продвинутые команды управления" },
  { id: 4, level: 4, price: 399, description: "Высокий уровень доступа" },
  { id: 5, level: 5, price: 431, description: "Управление игровыми событиями" },
  { id: 6, level: 6, price: 532, description: "Продвинутые возможности сервера" },
  { id: 7, level: 8, price: 581, description: "Расширенные права администрирования" },
  { id: 8, level: 9, price: 600, description: "Высокие привилегии админа" },
  { id: 9, level: 10, price: 782, description: "Максимальные возможности модерации" },
  { id: 10, level: 11, price: 972, description: "Элитный уровень доступа" },
  { id: 11, level: 12, price: 1212, description: "Премиум возможности сервера" },
  { id: 12, level: 13, price: 1423, description: "Основатель сервера" },
  { id: 13, level: 14, price: 3023, description: "Владелец сервера" },
];

const DonatPage = () => {
  return (
    <>
      <NavBar />
      <main className="pt-12 min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-red-600 mb-2 text-center">
              ДОНАТ ПРИВИЛЕГИИ
            </h1>
            <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
              Выберите подходящий уровень администратора и получите доступ к управлению сервером SAMP.
              Все привилегии выдаются моментально после успешной оплаты.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {ADMIN_LEVELS.map((admin) => (
                <AdminCard 
                  key={admin.id}
                  id={admin.id}
                  level={admin.level}
                  price={admin.price}
                  description={admin.description}
                />
              ))}
            </div>
            
            <div className="mt-16 bg-black/30 p-6 rounded-lg max-w-3xl mx-auto border border-gray-800">
              <h2 className="text-2xl font-bold mb-4 text-red-500">Информация о донате</h2>
              <div className="space-y-3 text-gray-300">
                <p>• Все привилегии выдаются <span className="text-white font-semibold">навсегда</span>.</p>
                <p>• Активация происходит <span className="text-white font-semibold">автоматически</span> после оплаты.</p>
                <p>• Для получения привилегии важно указать <span className="text-white font-semibold">точный никнейм</span>.</p>
                <p>• По всем вопросам обращайтесь к администрации сервера.</p>
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

export default DonatPage;
