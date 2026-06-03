import styles from '../css/HowItWorks.module.css';
const steps = [
    {
      number: '1.',
      title: 'Call us anytime 24/7',
      description: 'You can contact us directly, we will quickly put you in touch with our home care professionals who are ready anytime'
    },
    {
      number: '2.',
      title: 'Schedule Service',
      description: 'After connecting your call, our home care experts will answer your questions and provide flexible appointment times'
    },
    {
      number: '3.',
      title: 'Your request is completed',
      description: 'Once your technician arrives, he will diagnose the problem and provide an estimate. If you decide to continue, the technician will get to work'
    }
  ];
export const HowItWorks=()=>{
    return(
       <section className={styles.container}>
      
      <div className={styles.imageColumn}>
        <div className={styles.imageWrapper}>
          <img 
            src="images/Group 35.png"
            alt="HomePro Professional Technician" 
            className={styles.workerImage} 
          />
          
          <div className={styles.badge}>
            <svg 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className={styles.badgeIcon}
            >
              <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.7l-3.61.81.34 3.68L1 12l2.44 2.79-.34 3.69 3.61.82 1.89 3.2 3.4-1.46 3.4 1.46 1.89-3.2 3.61-.82-.34-3.69L23 12zm-13 5l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
            </svg>
          </div>
        </div>
      </div>

     
      <div className={styles.textColumn}>
        <h2 className={styles.heading}>How HomePro<br />works?</h2>
        
        <div className={styles.stepsList}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepItem}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}
