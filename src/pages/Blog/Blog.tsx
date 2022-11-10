import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Layout from '../../components/Layout/Layout'
import styles from './Blog.module.css'

function Blog() {
    return (
        <Layout>
            
            <div className={styles.blog}>
                <h1>Blog</h1>
                <div className={styles.wrapBlog}>
                    <div className={styles.cardBlog}>
                        <h2>UI Interactions of the week</h2>
                        <div className={styles.dateBlog}>
                            <p>12 Feb 2020</p>
                            <div className={styles.divider} />
                            <p className={styles.type}>Express, Handlebars</p>
                        </div>
                        <p className={styles.content}>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <hr className={styles.solid}></hr>
                    </div>
                </div>
                <div className={styles.wrapBlog}>
                    <div className={styles.cardBlog}>
                        <h2>UI Interactions of the week</h2>
                        <div className={styles.dateBlog}>
                            <p>12 Feb 2020</p>
                            <div className={styles.divider} />
                            <p className={styles.type}>Express, Handlebars</p>
                        </div>
                        <p className={styles.content}>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <hr className={styles.solid}></hr>
                    </div>
                </div>
                <div className={styles.wrapBlog}>
                    <div className={styles.cardBlog}>
                        <h2>UI Interactions of the week</h2>
                        <div className={styles.dateBlog}>
                            <p>12 Feb 2020</p>
                            <div className={styles.divider} />
                            <p className={styles.type}>Express, Handlebars</p>
                        </div>
                        <p className={styles.content}>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <hr className={styles.solid}></hr>
                    </div>
                </div>
                <div className={styles.wrapBlog}>
                    <div className={styles.cardBlog}>
                        <h2>UI Interactions of the week</h2>
                        <div className={styles.dateBlog}>
                            <p>12 Feb 2020</p>
                            <div className={styles.divider} />
                            <p className={styles.type}>Express, Handlebars</p>
                        </div>
                        <p className={styles.content}>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <hr className={styles.solid}></hr>
                    </div>
                </div>

            </div>
            
        </Layout>
    )
}

export default Blog