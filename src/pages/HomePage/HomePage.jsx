import Hero from "../../components/Hero/Hero.jsx";
import css from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={css.homePage}>
      <Hero />
    </div>
  );
}

export default HomePage;
