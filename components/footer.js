import styles from "../styles/Home.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                ©2021 Eliott Davidson
                <a href="https://www.linkedin.com/in/eliott-davidson" target='_blank'>
                    <img className={styles.icon} src="./images/LI-In-Bug.png" alt="LinkedIn icon" />
                </a> 
                <a href="https://www.github.com/fussypuppet" target='_blank'>
                    <img className={styles.icon} src="./images/GitHub-Mark-120px-plus.png" alt="GitHub icon" />
                </a>
            </p>
        </footer>
    )
}