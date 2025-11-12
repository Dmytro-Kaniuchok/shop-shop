import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import css from "./Header.module.css";

function Header() {
  return (
    <header className={css.container}>
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
