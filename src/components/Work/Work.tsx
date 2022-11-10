import { useNavigate } from 'react-router-dom'
import styles from './Work.module.css'

function Work() {
    const navigate = useNavigate()
    return (
        <div className={styles.cardWork}>
            <div className={styles.imgWork}>
                <img src='https://inkythuatso.com/uploads/images/2022/03/4757790-16-10-42-13.jpg' />
            </div>

            <div className={styles.contentWork}>
                <h2 onClick={()=>{
                    navigate('../work_detail')
                }}>Designing Dashboards</h2>
                <div className={styles.year}>
                    <span>2020</span>
                    <p>Dashboard</p>
                </div>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt nostrud amet.
                </p>
            </div>

        </div>
    )
}

export default Work