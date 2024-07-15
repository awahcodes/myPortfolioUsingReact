import Nav from "./Nav";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <p className={styles.navfooter}>
        <Footernav />
      </p>
      <p>Copyright &copy; 2023 Adewale Aniyera. All Rights Reserved</p>
    </footer>
  );
};

const Footernav = () => {
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
export default Footer;
