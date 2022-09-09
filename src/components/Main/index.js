import React from 'react'
import Branding from '../Branding'
import Pricing from '../Pricing';
import styles from '../css/index.module.css';
import Plans from '../Plans';

export default function () {
    return (
        <div className={styles.minHScreen}>
            <Branding />
            <hr />
            <Pricing />
            <hr />
            <Plans />
            <hr />
        </div>
    )
}
