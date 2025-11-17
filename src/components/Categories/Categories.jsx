import css from "./Categories.module.css";

const categories = [
  {
    id: 1,
    name: "Кава",
    link: "/catalog/coffee",
    image: "/images/products/coffee1.jpg",
  },
  {
    id: 2,
    name: "Напої",
    link: "/catalog/drinks",
    image: "/images/products/drinks.jpg",
  },
  {
    id: 3,
    name: "Цукерки",
    link: "/catalog/candies",
    image: "/images/products/candies.jpg",
  },
  {
    id: 4,
    name: "Снеки",
    link: "/catalog/snacks",
    image: "/images/products/snacks.jpg",
  },
];

export default function Categories() {
  return (
    <div className={css.categoryCards}>
      {categories.map((cat) => (
        <a key={cat.id} href={cat.link} className={css.card}>
          <img src={cat.image} alt={cat.name} className={css.cardImg} />
          <div className={css.cardName}>{cat.name}</div>
        </a>
      ))}
    </div>
  );
}
