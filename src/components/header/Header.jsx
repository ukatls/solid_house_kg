import css from "./Header.module.css";
import logo from "../assets/images/logob.svg"
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className={css.wrapper}>
      <header className={`container ${css.header}`}>
        <img height={'60px'} src={logo} alt='this is logo' />
        
        <nav className={css.nav}>
          <Link to="/all">Все объявления</Link>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
        </nav>

      </header>
    </div>
  );
}
