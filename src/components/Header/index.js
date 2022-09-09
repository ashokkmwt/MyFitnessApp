import React from 'react'
import styles from '../css/index.module.css';
import cx from 'classnames'

export default function Header() {
  return (
    <header>
      <nav className={cx(styles.flex, styles.justifyBetween)}>
        <div className={cx(styles.logo, styles.fontBold, styles.flex, styles.itemCenter, styles.textBlue)}>MyFitness</div>
        <ul className={cx(styles.navbar, styles.flex, styles.itemCenter)}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact Us</li>
          <li><button className={styles.btn}>Join Now</button></li>
        </ul>
      </nav>
  
    </header>
  )
}
