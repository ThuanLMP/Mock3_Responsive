import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.listContact}>
                <li><i className="fab fa-facebook-square"></i></li>
                <li><i className="fab fa-instagram"></i></li>
                <li><i className="fab fa-twitter"></i></li>
                <li><i className="fab fa-linkedin"></i></li>
            </ul>
            <p>Copyright ©2020 All rights reserved </p>
        </footer>
    )
}

export default Footer