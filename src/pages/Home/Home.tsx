import styles from './Home.module.css'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Avatar } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import Work from '../../components/Work';
import { useState } from 'react';


function Home() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
   
    return (
        <div>
            <Header />
            <div className={styles.home}>
                <div className={styles.user}>
                    <div className={styles.contentUser}>
                        <h1>
                            Hi, I am John,
                            Creative Technologist
                        </h1>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <button>
                            Dowload Resume
                        </button>
                    </div>
                    <div className={styles.avatarUser} >
                        <div>
                            {
                                isMobile === true ?
                                    <Avatar
                                        sx={{
                                            width: '170px',
                                            height: '170px',
                                            boxShadow: '0px 10px #EDF7FA'
                                        }}
                                        alt="Avatar"
                                        src="https://inkythuatso.com/uploads/images/2022/03/4757790-16-10-42-13.jpg"
                                    /> :
                                    <Avatar
                                        sx={{
                                            width: '243px',
                                            height: '243px',
                                            boxShadow: '0px 10px #EDF7FA'
                                        }}
                                        alt="Avatar"
                                        src="https://inkythuatso.com/uploads/images/2022/03/4757790-16-10-42-13.jpg"
                                    />
                            }

                        </div>

                    </div>
                </div>
                <div className={styles.posts}>
                    <p className={styles.title}>Recent post</p>

                    {!isMobile && <a>View all</a>}
                    <div className={styles.cardsPost}>
                        <div className={styles.cardPost}>
                            <h2>
                                Making a design system from scratch
                            </h2>
                            <div className={styles.date}>
                                <p>12 Feb 2020</p>
                                <div className={styles.divider} />
                                <p>Design, Pattern</p>
                            </div>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                        <div className={styles.cardPost}>
                            <h2>
                                Creating pixel perfect icons in Figma
                            </h2>
                            <div className={styles.date}>
                                <p>12 Feb 2020</p>
                                <div className={styles.divider} />
                                <p>Figma, Icon Design</p>
                            </div>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.works}>
                    <p className={styles.title}>Featured works</p>
                    <Work />
                    <hr className={styles.solid}></hr>
                    <Work />
                    <hr className={styles.solid}></hr>
                    <Work />
                    <hr className={styles.solid}></hr>
                </div>
            </div>
            <Footer />

        </div>
    );
}

export default Home;
