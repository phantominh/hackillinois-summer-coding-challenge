import React from 'react';

import LOGO from "../../assets/logo.svg";
import styles from "./styles.module.scss"

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <a className={styles.navLogo} href='#home'><img className={styles.logo} src={LOGO} alt="HackIllinois Logo" /></a>
            <a className={styles.navItem} href='#schedule'>Schedule</a>
            <a className={styles.navItem} href='#prizes'>Prizes</a>
            <a className={styles.navItem} href='#mentors'>Mentors</a>
            <a className={styles.navItem} href='#home'>Home</a> 
        </nav> 
    );
};

export default NavBar;