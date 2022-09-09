import React from 'react'
import styles from '../css/index.module.css';
import cx from 'classnames';
import dumbbelImage from '../../assets/images/dumbbel.png';
import vectorImage from '../../assets/images/vector.jpg';

export default function Branding() {
    return (
        <section className={styles.section1}>
            <div className={styles.flex}>
                <div className={cx(styles.topleft, styles.px2)}>
                    <div className={styles.textCenter}>
                        <img src={dumbbelImage} alt="dumbbel" />
                    </div>
                    <h1 className={cx(styles.my1, styles.textCenter)}>The best fitness Gym in the town is here.</h1>
                    <p className={styles.textCenter}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi adipisci
                        pariatur excepturi expedita veritatis autem nemo sapiente in placeat delectus, incidunt
                        quis! Provident praesentium vitae, quo voluptas accusantium itaque dolor, incidunt, sint
                        debitis laborum animi porro est a.</p>
                </div>
                <div className={styles.topright}>
                    <img src={vectorImage} alt="vector" />
                </div>
            </div>
        </section>
    )
}
