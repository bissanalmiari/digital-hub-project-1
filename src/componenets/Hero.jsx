import styles from "../css/Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container ">

        <div className={styles.heroGrid}>

          <div className={styles.imageCard}>
            <img src="images/hero1.png" alt="worker" className={styles.heroImage} />
          </div>

          <div className={styles.content}>
            <p className={styles.subtitle}>
              Maintenances &nbsp;•&nbsp; Repairs &nbsp;•&nbsp; Improvements
            </p>

            <h1 className={styles.title}>
              Need improvement <br />
              or repair your home? <br />
              we can help!
            </h1>

            <div className={styles.benefits}>
              <span>✓ Free Quotes</span>
              <span>✓ 100% Commitment-Free</span>
            </div>

            
            <button className={styles.callBtn}>
              Call Us Now
              
              <img src="images/phone.png" alt="phone" className={styles.phoneIcon} />
            </button>
          </div>

          <div className={styles.imageCard}>
            <img src="images/hero2.png" alt="worker" className={styles.heroImage} />
          </div>

        </div>

      
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <div className={styles.imgCont}>
            <img src="images/guarantee.png" alt="guarantee" className={styles.featureIcon} />
            </div>
            <span>Satisfaction Guarantee</span>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.imgCont}>
            <img src="images/availability.png" alt="availability" className={styles.featureIcon} />
            </div>
            <span>24H Availability</span>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.imgCont}>
            <img src="images/local.png" alt="local" className={styles.featureIcon} />
            </div>
            <span>Local US Professional</span>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.imgCont}>
            <img src="images/appointment.png" alt="appointment" className={styles.featureIcon} />
            </div>
            <span>Flexible Appointments</span>
          </div>
        </div>

      </div>
    </section>
  );
};