import React, { Fragment } from 'react'
import styles from '../css/index.module.css'

export default function Boxes() {
    const boxes = [
        { h2: "Free", l1: "$0", l2: "10 users included", l3: "2 GB of storage", l4: "Email support", l5: "Help center access" },
        { h2: "Pro", l1: "$15/mo", l2: "20 users included", l3: "10 GB of storage", l4: "Priority email support", l5: "Help center access" },
        { h2: "Enterprise", l1: "$29/mo", l2: "30 users included", l3: "15 GB of storage", l4: "Phove and email support", l5: "Help center access" }
    ];
    return (
        <>
            {boxes.map((el, index) => {
                return (
                    <div key={index} className={styles.box}>
                        <h2>{el.h2}</h2>
                        <ul>
                            <li>{el.l1}</li>
                            <li>{el.l2}</li>
                            <li>{el.l3}</li>
                            <li>{el.l4}</li>
                            <li>{el.l5}</li>
                        </ul>
                    </div>
                )
            })}
        </>
    )
}

