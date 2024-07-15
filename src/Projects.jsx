import styles from "./Projects.module.css";

const projectData = [
  {
    id: 1,
    image: "EDAImage4.png",
    title: "EDA with Pandas",
    gitlink: "#",
    demolink: "#",
  },
  {
    id: 2,
    image: "BTCImage4.png",
    title: "Bitcoin Trend Analysis",
    gitlink: "#",
    demolink: "#",
  },
  {
    id: 3,
    image: "NestleImage4.png",
    title: "Sales Data Analysis",
    gitlink: "#",
    demolink: "#",
  },
];

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      {projectData.map((projectDatum) => {
        return <Project {...projectDatum} key={projectDatum.id} />;
      })}
    </div>
  );
};

const Project = (props) => {
  const { id, image, title, gitlink, demolink } = props;

  return (
    <div className={styles.project}>
      <img src={image} alt={title} />
      <h2>{title}</h2>

      <a href={gitlink}>Github</a>

      <a href={demolink}>Live Demo</a>
    </div>
  );
};

export default Projects;
