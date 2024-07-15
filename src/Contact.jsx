import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={styles.contact}>
        <Contactdetails
          image="email.png"
          title="email"
          detailslink="https://www.google.com"
          details="awahcodes@gmail.com"
        />
        <Contactdetails
          image="linkedin.png"
          title="linkedin"
          detailslink="https://www.google.com"
          details="LinkedIn"
        />
      </div>
    </>
  );
};

const Contactdetails = (props) => {
  const { image, title, detailslink, details } = props;
  return (
    <div className={styles.contactdetails}>
      <img src={image} alt={title} />
      <a href={detailslink} target="_blank">
        {details}
      </a>
    </div>
  );
};

export default Contact;
