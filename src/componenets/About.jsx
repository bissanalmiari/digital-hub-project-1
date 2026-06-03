import styles from "../css/About.module.css"

export const About = () => {
    return (

        <section
            className={styles.section}
            id="about">

            <div className="container">

                <div className="row align-items-center">

                    <div className={styles.content + " col-lg-6"}>

                        <h2 className={styles.title}>
                            Professional for your home services
                        </h2>
                        <p className={styles.content}>
                            You need help for home care? We are home care professionals focused in the US region. We provide several services that support home services.
                        </p>

                        <ul className={styles.list}>
                            <li>✓ Repair and Installation</li>
                            <li>✓ Maintenance</li>
                            <li>✓ Home Security Services</li>
                            <li>✓ Plumbing </li>
                            <li>✓ Budget-friendly</li>
                            <li>✓ Eco-friendly solutions</li>
                        </ul>

                        <button className={styles.learnBtn}>
                            We already 24 hours fast services to help you. You can contact us at  (888) 617-5894
                        </button>

                    </div>

                    <div className={styles.imageContainer + " col-lg-6"}>
                        <svg viewBox="0 0 100 100" width="700" height="550">
                            <defs>
                                <clipPath id="shape">
                                    <path d="M50 3
               Q53 3 55 5
               L95 25
               Q98 27 98 30
               L98 95
               Q98 98 95 98
               L5 98
               Q2 98 2 95
               L2 30
               Q2 27 5 25
               L45 5
               Q47 3 50 3 Z"/>
                                </clipPath>
                            </defs>

                            <image
                                href="images/Group 34.png"
                                width="150"
                                height="130"
                            x="-50"
                            y="-15"
                                preserveAspectRatio="xMidYMid slice"
                                clip-path="url(#shape)"
                            />
                        </svg>


                    </div>

                </div>

            </div>
        </section>

    );
}