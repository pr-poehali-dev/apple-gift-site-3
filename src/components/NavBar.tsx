import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full bg-black/90 backdrop-blur-md fixed top-0 z-10 border-b border-gray-800">
      <div className="container mx-auto px-6 h-12 flex items-center justify-between">
        <Link to="/" className="text-red-600 font-bold text-xl">
          ДОНАТ САМП
        </Link>
        <div className="flex gap-6 text-sm">
          <Link to="/" className="text-white hover:text-red-500 transition-colors">
            Главная
          </Link>
          <Link to="/donat" className="text-white hover:text-red-500 transition-colors">
            Привилегии
          </Link>
          <Link to="/howto" className="text-white hover:text-red-500 transition-colors">
            Инструкция
          </Link>
          <Link to="/cart" className="text-white hover:text-red-500 transition-colors">
            Корзина
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
