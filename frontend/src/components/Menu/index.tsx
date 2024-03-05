import { Link } from "react-router-dom";
import NavigationLink from "../NavigationLink";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <header>
      <nav className={styles.navigation}>
        <Link to="/" className={styles.navigation__logoContainer}>
          <img
            className={styles.navigation__logo}
            src="./images/descomplica-logo.png"
            alt="Logo da Descomplica"
          />
          <span className={styles.navigation__title}>Teste Prático</span>
        </Link>
        <div className={styles.navigation__linksContainer}>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/alunos">Alunos</NavigationLink>
          <Link
            to="https://github.com/nawsacul"
            target="_blank"
            className={styles.link__descomplica}
          >
            Repositório GitHub
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
