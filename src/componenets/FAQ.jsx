import { useState } from "react";
import styles from "../css/FAQ.module.css"
const faqData = [
  {
    id: 1,
    question: 'What is HomePro?',
    answer: 'HomePro is a home care platform that connects homeowners with professional service providers offering a wide range of home services, including repairs, maintenance, cleaning, and more.'
  },
  {
    id: 2,
    question: 'Are the service providers on HomePro reliable and qualified?',
    answer: 'Yes, all service providers on HomePro undergo background checks and verification steps to ensure reliability, proper licensing, and high-quality service execution.'
  },
  {
    id: 3,
    question: 'What if I have an issue or complaint about a service provider?',
    answer: 'If you encounter any issues, our dedicated customer support team is available to help mediate disputes, process refunds if applicable, or send an alternative technician.'
  },
  {
    id: 4,
    question: 'How are payments handled on HomePro?',
    answer: 'Payments are securely processed through our digital platform. You will only be billed once the service is marked as completed by both you and the technician.'
  },
  {
    id: 5,
    question: 'How do I leave a review for a service provider?',
    answer: 'After your service request is completed, you will receive an automated email link and a dashboard notification prompt allowing you to rate and review your provider.'
  }
];
export const FAQ=()=>{
    
 const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.faqContainer}>
     
      <div className={styles.titleColumn}>
        <h2 className={styles.heading}>Frequently Asked<br />Questions</h2>
        <p className={styles.supportText}>
          Still need help? <a href="#contact" className={styles.link}>Get Help Now</a>
        </p>
      </div>

      
      <div className={styles.accordionColumn}>
        {faqData.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div 
              key={item.id} 
              className={`${styles.accordionItem} ${isOpen ? styles.activeItem : ''}`}
            >
              <button 
                className={styles.accordionHeader} 
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={isOpen}
              >
                <span className={styles.questionText}>{item.question}</span>
                <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>

              <div className={`${styles.accordionContent} ${isOpen ? styles.contentOpen : ''}`}>
                <div className={styles.answerInner}>
                  <p className={styles.answerText}>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    );
}