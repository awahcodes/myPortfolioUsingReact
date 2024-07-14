import styles from "./Aboutme.module.css";
const AboutMe = () => {
  return (
    <article>
      <div>
        <img
          src="aboutPix.png"
          alt="aboutPix"
          className={styles.aboutMeImage}
        />
      </div>
      <div>
        <div className={styles.aboutMeContainer}>
          <div className={styles.experienceDetails}>
            <AboutDetails
              image="experience.png"
              title="experience"
              firstAboutTitle="Experience"
              secondAboutTitle="2 years+"
              thirdAboutTitle="Fullstack Development"
            />
          </div>
          <div className={styles.educationDetails}>
            <AboutDetails
              image="education.png"
              title="education"
              firstAboutTitle="Education"
              secondAboutTitle="B.Sc Bachelors Degree"
              thirdAboutTitle="M.Sc Masters Degree"
            />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          odit pariatur veniam voluptatem, nemo tenetur laudantium nam
          necessitatibus repudiandae, dolore tempore. Est asperiores earum
          expedita soluta vero non fugiat fuga corporis consectetur inventore
          reprehenderit delectus, eum impedit, culpa debitis magni at repellat
          corrupti officia magnam adipisci? Nesciunt aliquam sit in.
        </p>
      </div>
    </article>
  );
};

const AboutDetails = (props) => {
  const { image, title, firstAboutTitle, secondAboutTitle, thirdAboutTitle } =
    props;
  return (
    <>
      <img src={image} alt={title} />
      <p className={styles.firstAboutTitleClass}>{firstAboutTitle}</p>
      <p>{secondAboutTitle}</p>
      <p>{thirdAboutTitle}</p>
    </>
  );
};

export default AboutMe;
