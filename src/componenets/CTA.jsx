import styles from "../css/CTA.module.css"
export const CTA=()=>{
    return(
        <section className={styles.ctaContainer}>
      <div className={styles.ctaContent}>
        
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>
            Already to improve<br />
            or repair your home?<br />
            Let’s Talk!
          </h2>
          
          <div className={styles.features}>
            <span className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span> Free Quotes
            </span>
            <span className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span> 100% Commitment-Free
            </span>
          </div>

          <a href="tel:#" className={styles.callButton}>
            Call Us Now
            <span className={styles.phoneIconWrapper}>
              <img src="images/phone.png" alt=""/>
            </span>
          </a>
        </div>

        
        <div className={styles.imageBlock}>
          <div className={styles.imageWrapper}>
    
            <img 
              src="images/Group 36.png" 
              alt="HomePro Professional Technician with Smart Home App" 
              className={styles.mainImage}
            />
          </div>
        </div>
      </div>
    </section>
    );
}