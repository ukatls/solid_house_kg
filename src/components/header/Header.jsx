import css from "./Header.module.css";
import logo from "../assets/images/logob.svg"
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className={css.wrapper}>
      <header className={`container ${css.header}`}>
        <Link to='/'><img height={'60px'} src={logo} alt='this is logo' /></Link>
        
        <nav className={css.nav}>
          <Link to="/all">Все объявления</Link>
          <a href="#">О нас</a>
          <Link to='/ContactsUs'>Контакты</Link>
        </nav>

      </header>
    </div>
  );
}
