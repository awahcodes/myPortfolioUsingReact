import styles from "./Experience.module.css";
const frontendskillshowcase = [
  {
    frontendid: 1,
    frontendimage: "checkmark.png",
    frontendtitle: "experience image",
    frontendlanguage: "HTML",
    frontendlevel: "Experienced",
  },
  {
    frontendid: 2,
    frontendimage: "checkmark.png",
    frontendtitle: "experience image",
    frontendlanguage: "CSS",
    frontendlevel: "Experienced",
  },
  {
    frontendid: 3,
    frontendimage: "checkmark.png",
    frontendtitle: "experience image",
    frontendlanguage: "TypeScript",
    frontendlevel: "Intermediate",
  },
  {
    frontendid: 4,
    frontendimage: "checkmark.png",
    frontendtitle: "experience image",
    frontendlanguage: "SASS",
    frontendlevel: "Basic",
  },
  {
    frontendid: 5,
    frontendimage: "checkmark.png",
    frontendtitle: "experience image",
    frontendlanguage: "JavaScript",
    frontendlevel: "Experienced",
  },
  {
    frontendid: 6,
    frontendimage: "checkmark.png",
    frontendtitle: "experience image",
    frontendlanguage: "Material UI",
    frontendlevel: "Basic",
  },
];

const Frontendskills = () => {
  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.frontendDev}>Frontend Development</h2>
      <div className={styles.skillContainer}>
        {frontendskillshowcase.map((frontendskillshow) => {
          return (
            <Frontendskill
              {...frontendskillshow}
              key={frontendskillshowcase.id}
            />
          );
        })}
      </div>
    </div>
  );
};

const Frontendskill = (props) => {
  const { frontendimage, frontendtitle, frontendlanguage, frontendlevel } =
    props;
  return (
    <>
      <div className={styles.experienceContainer}>
        <div>
          <img
            src={frontendimage}
            alt={frontendtitle}
            className={styles.experienceImage}
          />
        </div>

        <div className={styles.experienceLanguage}>
          <p>{frontendlanguage}</p>
          <p>{frontendlevel}</p>
        </div>
      </div>
    </>
  );
};

const backendskillshowcase = [
  {
    backendid: 1,
    backendimage: "checkmark.png",
    backendtitle: "experience image",
    backendlanguage: "PostgreSQL",
    backendlevel: "Experienced",
  },
  {
    backendid: 2,
    backendimage: "checkmark.png",
    backendtitle: "experience image",
    backendlanguage: "Node JS",
    backendlevel: "Experienced",
  },
  {
    backendid: 3,
    backendimage: "checkmark.png",
    backendtitle: "experience image",
    backendlanguage: "Express JS",
    backendlevel: "Intermediate",
  },
  {
    backendid: 4,
    backendimage: "checkmark.png",
    backendtitle: "experience image",
    backendlanguage: "Git",
    backendlevel: "Experienced",
  },
];

const Backendskills = () => {
  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.frontendDev}>Backend Development</h2>
      <div className={styles.skillContainer}>
        {backendskillshowcase.map((backendskillshow) => {
          return (
            <Backendskill {...backendskillshow} key={backendskillshowcase.id} />
          );
        })}
      </div>
    </div>
  );
};

const Backendskill = (props) => {
  const { backendimage, backendtitle, backendlanguage, backendlevel } = props;
  return (
    <>
      <div className={styles.experienceContainer}>
        <div>
          <img
            src={backendimage}
            alt={backendtitle}
            className={styles.experienceImage}
          />
        </div>

        <div className={styles.experienceLanguage}>
          <p>{backendlanguage}</p>
          <p>{backendlevel}</p>
        </div>
      </div>
    </>
  );
};

const Bothskills = () => {
  return (
    <div className={styles.bothSkillsContainer}>
      <Frontendskills />
      <Backendskills />
    </div>
  );
};

export default Bothskills;
