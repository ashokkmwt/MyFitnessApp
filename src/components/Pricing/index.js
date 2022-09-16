import React from 'react'
import styles from '../css/index.module.css';
import cx from 'classnames';
import Boxes from '../Boxes';

export default function Pricing() {
    return (
        <section className={cx(styles.section2, styles.my2)}>
            <h1 className={styles.textCenter2}>Pricing</h1>
            <p className={styles.my2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum nemo amet autem.
                Repellat sed ab
                odit natus est voluptatum dolorem molestiae enim pariatur facilis, tempore id ea corrupti voluptates
                deserunt sint libero non. Tempore officia esse ex possimus voluptatum laboriosam id?</p>
            <div className={cx(styles.boxes, styles.flex, styles.justifyCenter)}>
                
                <Boxes/>

            </div>
        </section>
    )
}
