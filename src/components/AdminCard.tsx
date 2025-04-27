import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface AdminCardProps {
  id: number;
  level: number;
  price: number;
  description: string;
}

const AdminCard = ({ id, level, price, description }: AdminCardProps) => {
  const navigate = useNavigate();

  const addToCart = () => {
    try {
      // Получаем текущую корзину из localStorage
      const existingCartString = localStorage.getItem("cart");
      let cart = existingCartString ? JSON.parse(existingCartString) : [];
      
      // Проверяем, есть ли уже такой товар в корзине
      const existingItemIndex = cart.findIndex((item: any) => item.id === id);
      
      if (existingItemIndex >= 0) {
        // Если товар уже в корзине, увеличиваем количество
        cart[existingItemIndex].quantity += 1;
      } else {
        // Если товара нет в корзине, добавляем его
        cart.push({
          id,
          name: `Админ ${level} LVL`,
          description: description || "Привилегия администратора",
          price,
          quantity: 1
        });
      }
      
      // Сохраняем обновленную корзину
      localStorage.setItem("cart", JSON.stringify(cart));
      
      // Переходим на страницу корзины
      navigate("/cart");
    } catch (e) {
      console.error("Ошибка при добавлении в корзину:", e);
    }
  };

  return (
    <Card className="bg-black/70 border border-gray-800 hover:border-red-500/50 transition-all duration-300 overflow-hidden relative">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl text-white">Админ {level} LVL</CardTitle>
        <CardDescription className="text-gray-400">{description || "Привилегия администратора"}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-red-500 mb-2">{price}₽</div>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>✓ Базовые команды</li>
          <li>✓ Модерация чата</li>
          {level >= 3 && <li>✓ Управление игроками</li>}
          {level >= 5 && <li>✓ Редактирование мира</li>}
          {level >= 8 && <li>✓ Расширенные права</li>}
          {level >= 10 && <li>✓ VIP привилегии</li>}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-red-600 hover:bg-red-700 text-white"
          onClick={addToCart}
        >
          Купить сейчас
        </Button>
      </CardFooter>
      
      {/* Декоративный элемент */}
      <div className="absolute -right-6 -top-6 w-16 h-16 bg-red-500/20 rounded-full blur-xl"></div>
    </Card>
  );
};

export default AdminCard;
