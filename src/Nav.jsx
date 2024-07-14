import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <>
      <nav>
        <ul className={styles.navContainer}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
