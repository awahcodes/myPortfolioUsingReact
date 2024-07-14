import styles from "./Sectiontitle.module.css";
const Sectiontitle = () => {
  return (
    <section>
      <Title prytitle="Get To Know More" sectitle="About Me" />
    </section>
  );
};

const Title = (props) => {
  const { prytitle, sectitle } = props;
  return (
    <div className={styles.aboutMe}>
      <p>{prytitle}</p>
      <h2>{sectitle}</h2>
    </div>
  );
};
export default Sectiontitle;
