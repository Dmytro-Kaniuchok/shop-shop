import Categories from "../Categories/Categories.jsx";
import Container from "../Container/Container";
import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.inner}>
          <div className={css.text}>
            <h1>
              Продукти
              <br />з усього світу
            </h1>
            <p>Якісний всортимент екзотичних продуктів</p>
            <a href="/catalog" className={css.btn}>
              Перейти до каталогу
            </a>
          </div>

          <div className={css.imageWrap}>
            <img src="/images/heroImg.png" alt="картинка" />
          </div>
        </div>
        <Categories />
      </Container>
    </section>
  );
}
