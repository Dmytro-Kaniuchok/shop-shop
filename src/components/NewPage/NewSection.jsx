import css from "./NewSection.module.css";

export default function NewSection() {
  const products = [
    {
      id: 1,
      title: "Кава Latte",
      image: "/images/products/coffee.jpeg",
      price: "150 грн",
      isNew: true,
    },
    {
      id: 2,
      title: "Печиво Oreo",
      image: "/images/products/oreo.jpg",
      price: "80 грн",
      isNew: true,
    },
    {
      id: 3,
      title: "Сік Апельсиновий",
      image: "/images/products/juice.png",
      price: "160 грн",
      isNew: true,
    },
    {
      id: 4,
      title: "Цукерки Assorti",
      image: "/images/products/candies.png",
      price: "200 грн",
      isNew: true,
    },
  ];

  return (
    <section className={css.newSection}>
      <div className={css.titleRow}>
        <h2>Новинки</h2>
        <a href="/catalog" className={css.btn}>
          Дізнатися більше
        </a>
      </div>

      <div className={css.cards}>
        {products.map((item) => (
          <div key={item.id} className={css.card}>
            {item.isNew && <span className={css.badge}>NEW</span>}
            <img src={item.image} alt={item.title} />

            <h3>{item.title}</h3>
            <p className={css.price}>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
