import { Button } from "@/components/ui/button";

interface AdminCardProps {
  level: number;
  price: number;
  onClick?: () => void;
}

const AdminCard = ({ level, price, onClick }: AdminCardProps) => {
  const formattedPrice = new Intl.NumberFormat('ru-RU').format(price);
  
  return (
    <div className="flex flex-col bg-black/80 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-center h-40 p-4 bg-gradient-to-b from-red-900/40 to-black/40">
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="80" height="80">
            <linearGradient id="adminGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF0000" />
              <stop offset="100%" stopColor="#FF5E5E" />
            </linearGradient>
            <path d="M64,16 L8,48 L8,96 L64,128 L120,96 L120,48 L64,16 Z" fill="url(#adminGradient)" />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="40" fontWeight="bold">{level}</text>
          </svg>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-medium text-white">
          Админ {level} LVL
        </h3>
        <p className="text-sm text-gray-400">
          Получите доступ к админ-командам и возможностям
        </p>
        <div className="text-red-500 font-bold text-xl mt-1">
          {formattedPrice}₽
        </div>
        <Button 
          className="mt-2 bg-red-600 hover:bg-red-700 text-white font-medium"
          onClick={onClick}
        >
          Купить
        </Button>
      </div>
    </div>
  );
};

export default AdminCard;
