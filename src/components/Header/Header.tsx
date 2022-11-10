
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'


function Header() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const navigate = useNavigate()
    const [stateNav, setStateNav] = useState<Boolean>(false)
   
    return (
        <>
            <header className={styles.header}>
                {
                    isMobile === true ?
                        <div className={styles.btnMenu} onClick={() => {
                            setStateNav(true)
                        }}>
                            <i className="fal fa-bars"></i>
                        </div> :
                        <ul>
                            <li className={styles.active}
                                onClick={() => {                                    
                                    navigate('/works')
                                }}

                            >Works
                            </li>
                            <li
                                onClick={() => {
                                    navigate('/blog')
                                }}
                            >Blog</li>
                            <li>Contact</li>
                        </ul>
                }
            </header>
            {
                isMobile && stateNav &&
                <div className={styles.wrapNavMobile}>
                    <div className={styles.navOverlay}></div>
                    <div className={styles.navMobile}>
                        <h1>Navigate</h1>
                        <div className={styles.btnIcon} onClick={()=>{
                            setStateNav(false)
                        }}><i className="far fa-times"></i></div>
                        <hr className={styles.solid}></hr>
                        <ul className={styles.navMobileList}>
                            <li onClick={()=> {
                                navigate('../works')
                            }}>Works</li>
                            <li onClick={()=> {
                                navigate('../blog')
                            }}>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            }



        </>

    )
}

export default Header