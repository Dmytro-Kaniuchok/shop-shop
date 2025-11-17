import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <p className={css.copy}>
          © {new Date().getFullYear()} Магазин. Всі права захищені.
        </p>
      </div>
    </footer>
  );
}
