 import styles from "../css/Services.module.css";



const services = [
  {
    icon: "plumbing",
    title: "Plumbing Services",
    paragraph:"Drain pipe leaking, pipe clogged, replace the pipe line",
  },
  {
    icon: "Roof",
    title: "Roofing Repair",
    paragraph:"Roof leaks, tile replacement, roof cleaning and maintenance"
  },
  {
    icon: "truck",
    title: "Mold Removal",
    paragraph:"Removing and cleaning mildew, Restoration and Prevention"
  },
  {
    icon: "tree",
    title: "Tree Trimming",
    paragraph:"Trimming and cleaning, Deadwood removal, Tree shaping"
  },
  {
    icon: "repair",
    title: "Appliance Repair",
    paragraph:"repair of washing machines, refrigerators, Air conditioner, etc"
  },
  {
    icon: "bathroom",
    title: "Bathroom Remodeling",
    paragraph:"Design and Consulting, installation, Repairing, tile repair"
  },
  {
    icon: "door",
    title: "Locksmith",
    paragraph:"Lock Installation and Repair, Duplication, Lock Rekeying"
  }
 
];

export const Services=()=>{
    return(
       
    <section
      className={styles.section}
      id="services"
    >
      <div className="container">

        <h2 className={styles.title}>
          Our Services
        </h2>
        <p className={styles.content}>
          You have problems with leaking pipes, broken tiles, lost keys or want to tidy up the trees around you, of course you need our help!
        </p>

        <div className="row g-4">

          {services.map((service) => (
            <div
              className="col-md-6 col-lg-3"
              key={service.title}
            >
              <div className={styles.card}>
                <div className={styles.imgCont}>

                <img src={`images/${service.icon}.png`} alt={service.title} className={styles.icon} />
                
</div>
                <h5 className={styles.serviceTitle}>
                  {service.title}
                </h5>

                <p>
                 {service.paragraph}
                </p>

              </div>
              
            </div>
            
          ))}
          <div className={styles.more + " col-md-6 col-lg-3" }>
                <h3>More service?</h3>
                <p>You can tell us what you need and we can help! </p>
                <button>Call Us Now</button>
              </div>

        </div>

      </div>
    </section>
 
    );
}