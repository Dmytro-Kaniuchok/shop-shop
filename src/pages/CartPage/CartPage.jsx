import css from "./CartPage.module.css";

function CartPage() {
  return (
    <section className={css.cartPage}>
      <h1>Кошик</h1>
      <p>Тут будуть товари, які ви додали до корзини.</p>
    </section>
  );
}

export default CartPage;
