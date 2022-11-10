import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from './WorkDetail.module.css'

function WorkDetail() {

    return (
        <>
            <Header />
            <div className={styles.wrapWorkDetail}>
                <div className={styles.workDetail}>
                    <h1>Designing Dashboards with usability in mind</h1>
                    <div className={styles.year}>
                        <span>2020</span>
                        <p>Dashboard, User Experience Design</p>
                    </div>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <img src="https://inkythuatso.com/uploads/images/2022/03/4757790-16-10-42-13.jpg" />
                    <div className={styles.moreDetail}>
                        <h1>Heading 1</h1>
                        <h2>Heading 2</h2>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <img src="https://inkythuatso.com/uploads/images/2022/03/4757790-16-10-42-13.jpg" />
                        <img src="https://inkythuatso.com/uploads/images/2022/03/4757790-16-10-42-13.jpg" />
                    </div>

                </div>
            </div>

            <Footer />
        </>

    )
}

export default WorkDetail