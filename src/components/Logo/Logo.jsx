import { Link } from "react-router-dom";
import css from "./Logo.module.css";
import heroLogo from "/images/heroLogo.png";

export default function Logo() {
  return (
    <Link to="/" className={css.container}>
      <div className={css.logo}>
        <img src={heroLogo} alt="Planet Logo" width="180" height="50" />
      </div>
    </Link>
  );
}
