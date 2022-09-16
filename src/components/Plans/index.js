import React from 'react'
import styles from '../css/index.module.css';
import cx from 'classnames';

export default function Plans() {

    const tableBody = [
        { td1: "Public", td2: "Yes", td3: "Yes", td4: "Yes" },
        { td1: "Private", td2: "-", td3: "Yes", td4: "Yes" },
        { td1: "Permissions", td2: "Yes", td3: "Yes", td4: "Yes" },
        { td1: "Sharing", td2: "-", td3: "Yes", td4: "Yes" },
        { td1: "Unlimited members", td2: "-", td3: "Yes", td4: "Yes" },
        { td1: "Extra security", td2: "-", td3: "-", td4: "Yes" }
    ]

    return (
        <>
            <section className={styles.section3}>
                <h1 className={cx(styles.textCenter, styles.my2)}>Compare plans</h1>
                <div className={cx(styles.container, styles.plantable)}>
                    <table className={cx(styles.table, styles.textCenter)}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Free</th>
                                <th>Pro</th>
                                <th>Enterprise</th>
                            </tr>
                        </thead>
                        {tableBody.map((tb, index) => {
                            return (
                                <tfoot key={index}>
                                    <tr>
                                        <th className={styles._wd}>{tb.td1}</th>
                                        <th className={styles._wd}>{tb.td2}</th>
                                        <th className={styles._wd}>{tb.td3}</th>
                                        <th className={styles._wd}>{tb.td4}</th>
                                    </tr>
                                </tfoot>
                            )
                        })}
                    </table>
                </div>
            </section>
        </>
    )
}
