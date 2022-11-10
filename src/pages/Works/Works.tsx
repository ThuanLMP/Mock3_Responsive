import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Layout from '../../components/Layout/Layout'
import Work from '../../components/Work'
import styles from './Works.module.css'

function Works() {
    return (
        <Layout>
            
            <div className={styles.works}>
                <h1>Work</h1>
                <Work />
                <hr className={styles.solid}></hr>
                <Work />
                <hr className={styles.solid}></hr>
                <Work />
            </div>
         
        </Layout>

    )
}

export default Works