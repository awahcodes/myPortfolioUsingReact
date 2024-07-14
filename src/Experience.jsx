import styles from "./Experience.module.css";
const skillshowcase = [
  {
    id: 1,
    image: "checkmark.png",
    title: "experience image",
    language: "HTML",
    level: "Experienced",
  },
  {
    id: 2,
    image: "checkmark.png",
    title: "experience image",
    language: "CSS",
    level: "Experienced",
  },
  {
    id: 3,
    image: "checkmark.png",
    title: "experience image",
    language: "TypeScript",
    level: "Intermediate",
  },
  {
    id: 4,
    image: "checkmark.png",
    title: "experience image",
    language: "SASS",
    level: "Basic",
  },
  {
    id: 5,
    image: "checkmark.png",
    title: "experience image",
    language: "JavaScript",
    level: "Experienced",
  },
  {
    id: 6,
    image: "checkmark.png",
    title: "experience image",
    language: "Material UI",
    level: "Basic",
  },
];

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.frontendDev}>Frontend Development</h2>
      <div className={styles.skillContainer}>
        {skillshowcase.map((skillshow) => {
          return <Skill {...skillshow} key={skillshowcase.id} />;
        })}
      </div>
    </div>
  );
};

const Skill = (props) => {
  const { image, title, language, level } = props;
  return (
    <>
      <div className={styles.experienceContainer}>
        <div>
          <img src={image} alt={title} className={styles.experienceImage} />
        </div>

        <div className={styles.experienceLanguage}>
          <p>{language}</p>
          <p>{level}</p>
        </div>
      </div>
    </>
  );
};

export default Skills;
