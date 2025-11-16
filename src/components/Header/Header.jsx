import Container from "../Container/Container.jsx";
import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import css from "./Header.module.css";

function Header() {
  return (
    <header className={css.container}>
      <Container>
        <div className={css.inner}>
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
}

export default Header;
