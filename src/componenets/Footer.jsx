import styles from "../css/Footer.module.css"
export const Footer=()=>{

    return(
       <footer className={styles.footerContainer}>
      <div className={styles.innerContent}>
        
        <div className={styles.newsletterCard}>
          <div className={styles.newsletterInfo}>
            <h3 className={styles.newsletterTitle}>Stay Connected with Our Newsletter</h3>
            <p className={styles.newsletterSubtitle}>Subscribe to our newsletter to get more news, promo, or news services</p>
          </div>
          <form className={styles.subscribeForm}>
            <input 
              type="email" 
              placeholder="Enter email address" 
              className={styles.emailInput}
                           
              required 
            />
            <button type="submit" className={styles.subscribeBtn}>Subscribe</button>
          </form>
        </div>

   
        <div className={styles.mainFooterGrid}>
          
          <div className={styles.brandBlock}>
            <div className={styles.logoRow}>
              <img src="images/Mark.png" alt="mark" className={styles.logoIcon}/>
              <span className={styles.logoText}>HomePro</span>
            </div>
            <p className={styles.brandDesc}>
              Home Pro is your premier destination for top-notch smart home service and repair.
            </p>
           
            <div className={styles.socialsList}>
              <img src="images/youtube.png" alt="Youtube"/>
              <img src="images/instagram.png" alt="Instagram"/>
              <img src="images/facebook.png" alt="Facebook"/>
              <img src="images/twitter.png" alt="Twitter"/>
              <img src="images/mail.png" alt="Mail"/>
            </div>
          </div>

          <div className={styles.linksMenu}>
            <h4 className={styles.menuHeader}>Company</h4>
            <a href="#about" className={styles.menuLink}>About us</a>
            <a href="#services" className={styles.menuLink}>Services</a>
            <a href="#blog" className={styles.menuLink}>Our Blog</a>
            <a href="#contact" className={styles.menuLink}>Contact</a>
          </div>

          <div className={styles.linksMenu}>
            <h4 className={styles.menuHeader}>Legal</h4>
            <a href="#terms" className={styles.menuLink}>Terms</a>
            <a href="#privacy" className={styles.menuLink}>Privacy</a>
            <a href="#cookies" className={styles.menuLink}>Cookies</a>
            <a href="#license" className={styles.menuLink}>License</a>
          </div>
        </div>

      </div>
      <p className={styles.rights}>©2023 HomePro . All rights reserved</p>
    </footer>
    );
}