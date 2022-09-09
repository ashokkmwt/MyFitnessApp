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
                                <tbody key={index}>
                                    <th>{tb.td1}</th>
                                    <td>{tb.td2}</td>
                                    <td>{tb.td3}</td>
                                    <td>{tb.td4}</td>
                                </tbody>
                            )
                        })}
                    </table>
                </div>
            </section>
        </>
    )
}
