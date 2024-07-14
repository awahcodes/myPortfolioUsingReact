import styles from "./Title.module.css";
// const Sectiontitleaboutme = () => {
//   return (
//     <section>
//       <Title prytitle="Get To Know More" sectitle="About Me" />
//     </section>
//   );
// };

const Title = (props) => {
  const { prytitle, sectitle } = props;
  return (
    <div className={styles.aboutMe}>
      <p>{prytitle}</p>
      <h2>{sectitle}</h2>
    </div>
  );
};
export default Title;
