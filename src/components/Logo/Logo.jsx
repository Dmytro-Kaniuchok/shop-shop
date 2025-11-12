import { Link } from "react-router-dom";
import css from "./Logo.module.css";
import logo from "../../assets/planet.svg";

export default function Logo() {
  return (
    <Link to="/" className={css.container}>
      <div className={css.logo}>
        <img src={logo} alt="Навколо світу" className={css.logoImg} />
        Навколо <br /> світу
      </div>
    </Link>
  );
}
