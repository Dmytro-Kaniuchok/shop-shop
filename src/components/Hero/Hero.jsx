import { Link } from "react-router-dom";
import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.container}>
      <h2 className={css.heroTitle}>Продукти з усього світу</h2>
      <p className={css.heroDescr}>
        Якісний асортимент разноманітних продуктів
      </p>
      <Link to="/catalog" className={css.linkBtn}>
        Перейти до каталогу
      </Link>
    </section>
  );
}
