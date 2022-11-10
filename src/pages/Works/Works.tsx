import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Work from '../../components/Work'
import styles from './Works.module.css'

function Works() {
    return (
        <>
            <Header />
            <div className={styles.works}>
                <h1>Work</h1>
                <Work />
                <hr className={styles.solid}></hr>
                <Work />
                <hr className={styles.solid}></hr>
                <Work />
            </div>
            <Footer />
        </>

    )
}

export default Works