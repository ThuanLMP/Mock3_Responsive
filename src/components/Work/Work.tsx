import { useNavigate } from 'react-router-dom'
import styles from './Work.module.css'
type workForm = {
    name: string,
    imgUrl: string,
    year: number,
    type: string,
    content: string
}
type Props = {
    work: workForm
}

function Work({ work }: Props) {

    const navigate = useNavigate()
    return (
        <div className={styles.cardWork}>
            <div className={styles.imgWork}>
                <img src={work.imgUrl} />
            </div>

            <div className={styles.contentWork}>
                <h2 onClick={() => {
                    navigate('../work_detail')
                }}>{work.name}</h2>

                <div className={styles.year}>
                    <span>{work.year}</span>
                    <p>{work.type}</p>
                </div>
                <p>
                    {work.content}
                </p>
            </div>

        </div>
    )
}

export default Work