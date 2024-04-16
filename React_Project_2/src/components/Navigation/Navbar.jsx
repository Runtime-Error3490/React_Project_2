import React from 'react'
import styles from './Navigation.module.css'
export default function Navbar() {
    return (
        <nav className={`${styles.navigation} container`}>
            <div className='logo'>
                <img src="/photos/Frame 2 1.png" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>

    )
}
