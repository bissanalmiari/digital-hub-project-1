import styles from '../css/Blog.module.css';

const blogPosts = [
  {
    id: 1,
    image: 'images/Thumbnail.png', 
    date: '19 Jan 2023',
    title: 'Understanding Smart Home Systems & Maintenance',
    description: 'Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device malfunctions...',
    tags: ['Plumbing', 'Architecture', 'Maintenance']
  },
  {
    id: 2,
    image: 'images/Thumbnail (1).png', 
    date: '19 Jan 2023',
    title: 'The Ultimate Guide to Home Repairs and Renovations',
    description: 'Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device malfunctions...',
    tags: ['Plumbing', 'Architecture', 'Maintenance']
  },
  {
    id: 3,
    image: 'images/Thumbnail (2).png', 
    date: '19 Jan 2023',
    title: 'Painting Techniques for a Kitchen Refresh',
    description: 'Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device malfunctions...',
    tags: ['Plumbing', 'Architecture', 'Maintenance']
  }
];
export const Blog=()=>{
    return(
        <section className={styles.blogSection}>
      
      <div className={styles.header}>
        <h2 className={styles.mainTitle}>Explore Insights in Our Blog</h2>
        <p className={styles.subtitle}>
          Find lots of insights and information on our blog. Explore,<br />
          learn, and get inspired today.
        </p>
      </div>

    
      <div className={styles.blogGrid}>
        {blogPosts.map((post) => (
          <article key={post.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={post.image} alt={post.title} className={styles.cardImage} />
            </div>
            
            <div className={styles.cardContent}>
              <span className={styles.date}>{post.date}</span>
              <h3 className={styles.cardTitle}>{post.title}</h3>
              <p className={styles.description}>{post.description}</p>
              
              
              <div className={styles.tagContainer}>
                {post.tags.map((tag, idx) => (
                  <span key={idx} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

     
      <div className={styles.actionWrapper}>
        <a href="#blog" className={styles.viewMoreBtn}>
          View More 
          <span className={styles.arrow}>&gt;</span>
        </a>
      </div>
    </section>
    );
}



