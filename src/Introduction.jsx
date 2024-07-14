import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <section>
      <article className={styles.introductionContainer}>
        <div>
          <img src="profilePix.png" alt="profilePix" />
        </div>
        <div>
          <p>Hello, I'm</p>
          <h1>Adewale Aniyera</h1>
          <h3>Fullstack Developer</h3>
          <button className={styles.cv}>
            <a href="#">Download CV</a>
          </button>
          <button className={styles.info}>
            <a href="#">Contact Info</a>
          </button>
          <div>
            <a href="">
              <img src="linkedin.png" alt="linkedIn" className={styles.icon} />
            </a>
            <a href="">
              <img src="github.png" alt="github" className={styles.icon} />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Introduction;
