import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.overlay}>
      <div className={css.loader}></div>
    </div>
  );
}

export default Loader;
