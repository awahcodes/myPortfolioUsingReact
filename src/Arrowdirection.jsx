import styles from "./Arrowdirection.module.css";
const Arrowdirection = () => {
  return (
    <div>
      <a href="#">
        <img
          src="arrow.png"
          alt="arroedirection"
          className={styles.arrowdirection}
        />
      </a>
    </div>
  );
};

export default Arrowdirection;
