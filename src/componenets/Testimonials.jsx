import styles from "../css/Testimonials.module.css";

export const Testimonials = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.card}>
                    <h2>Here our original reviews from trusted platform</h2>
                    
                    {/* Just the review content here */}
                    <div className={styles.reviews}>
                        <img src="images/review.png" alt="review1" className={styles.reviewImage} />
                        <div className={styles.line}></div>
                        <p className={styles.reviewText}>
                            Roof repairs can be a real headache, but HomePro makes it easy! Their roofing team turned my leaky roof into a stockade. With their craftsmanship and the best materials, my house is now ready to weather any storm.
                        </p>
                        <div className={styles.person}>
                            <img src="images/Image (11).png" alt="Kendra Allen" />
                            <div className={styles.review}>
                                <p className={styles.name}>Kendra Allen</p>
                                <h4>★★★★★</h4>
                             </div>
                        </div>
                    </div>

                    {/* New control wrapper keeping navigation cleanly at the bottom */}
                    <div className={styles.controlsRow}>
                        <button className={`${styles.arrow} ${styles.leftArrow}`}>←</button>
                        <div className={styles.dots}>
                            <span className={`${styles.dot} ${styles.active}`}></span>
                            <span className={styles.dot}></span>
                            <span className={styles.dot}></span>
                            <span className={styles.dot}></span>
                        </div>
                        <button className={`${styles.arrow} ${styles.rightArrow}`}>→</button>
                    </div>

                </div>
            </div>
        </section>
    );
};