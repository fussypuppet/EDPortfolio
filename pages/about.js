import NavBar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <>
            <NavBar />
            <main>
                <h2>About Eliott</h2>
                <div className={styles.card}>
                    <img className={styles.thumbnail} src='../images/me.jpeg' alt="photo of Eliott" />
                    <p>
                        <a href="https://www.linkedin/in/eliott-davidson" target='_blank'>https://www.linkedin/in/eliott-davidson</a>
                    </p>
                    <p>
                        <a href="https://www.github.com/fussypuppet" target='_blank'>https://www.github.com/fussypuppet</a>
                    </p>
                    <p>eliott.davidson@gmail.com</p>
                    <p className={styles.list_label}>Skills:</p>
                    <ul>
                        <li>Napping</li>
                        <li>Chilling with dogs</li>
                        <li>Judging neighbors</li>
                    </ul>
                </div>    
            </main>
        </>
    )
}