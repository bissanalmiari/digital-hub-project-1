import styles from "../css/Features.module.css";

const features = [
    {
        title: "Satisfaction Guarantee",
        icon: "Guarantee2",
        description:
            "You don't need to worry about scams or our performance results. Our company has been verified and strives for optimal results.",
    },
    {
        title: "Free Quotes",
        icon:"Quotes",
        description:
            "Get personalized cost estimates without any obligation. Experience transparency and peace of mind as you explore our services.",
    },
    {
        title: "Local Professionals",
        icon: "Local2",
        description:
            "Our services cover nationwide areas including urban, suburban, and rural locations for both long and short-term maintenance.",
    },
    {
        title: "Fast 24-Hour Service",
        icon: "24H",
        description:
            "Need fast handling for repairs, leaks, or emergencies? Our experts are available anytime to help solve the problem.",
    },
    {
        title: "Flexible Appointments",
        icon: "Calendar",
        description:
            "We offer convenient appointment times that can accommodate your busy schedule, day or night, 7 days a week.",
    },
    {
        title: "100% Commitment-Free",
        icon: "Commitment",
        description:
            "You are free to ask us about the problems you are facing. We offer a no-commitment approach to put your mind at ease.",
    },
];

export const Features = () => {
    return (
        <section className={styles.section}>
            <div className="container flex flex-wrap">

                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Fast, Friendly and Satisfaction Guarantee
                    </h2>
                    <p>No matter how big or small your work is, whether it's for the interior or exterior of your home, we are ready to serve and help you solve your home problems.</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.row}>
                    {features.map((feature) => (
                        <div key={feature.title}>
                            <div className={styles.feature}>
                                <img src={`images/${feature.icon}.png`} alt={feature.title} className={styles.icon} />
                                <div className={styles.content}>
                                    <h5>{feature.title}</h5>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
