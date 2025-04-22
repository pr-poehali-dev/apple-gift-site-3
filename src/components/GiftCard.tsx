import { Button } from "@/components/ui/button";

interface GiftCardProps {
  price: number;
  onClick?: () => void;
}

const GiftCard = ({ price, onClick }: GiftCardProps) => {
  const formattedPrice = new Intl.NumberFormat('ru-RU').format(price);
  
  return (
    <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-fade-in">
      <div className="flex items-center justify-center h-48 p-4 bg-gradient-to-b from-apple-blue/10 to-apple-blue/5">
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100" height="100">
            <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0071e3" />
              <stop offset="100%" stopColor="#40a0ff" />
            </linearGradient>
            <rect x="8" y="18" width="112" height="92" rx="10" ry="10" fill="url(#cardGradient)" />
            <path d="M32,50 h64 M32,64 h32" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <circle cx="28" cy="38" r="8" fill="white" fillOpacity="0.5" />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl">
            {formattedPrice}₽
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-medium text-apple-dark">
          Apple Gift Card {formattedPrice}₽
        </h3>
        <p className="text-sm text-gray-500">
          Идеальный подарок для любителей техники Apple
        </p>
        <Button 
          className="mt-2 bg-apple-blue hover:bg-apple-blue/90 text-white font-medium rounded-full"
          onClick={onClick}
        >
          Купить
        </Button>
      </div>
    </div>
  );
};

export default GiftCard;
