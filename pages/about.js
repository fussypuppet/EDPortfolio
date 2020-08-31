import NavBar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <>
            <NavBar />
            <main>
                <h2>About Eliott</h2>
                <div className={styles.card}>
                    <p className={styles.list_label}>Some things I enjoy:</p>
                    <ul className={styles.skills}>
                        <li>
                            <img className={styles.icon} src="./images/react_icon.png" alt="React icon" />
                            React
                        </li>
                        <li>
                            <img className={styles.icon} src="./images/logo_flutter_1080px_clr.png" alt="Flutter icon" />
                            Flutter
                        </li>
                        <li>
                            <img className={styles.icon} src="./images/logo_dart_1080px_clr.png" alt="Dart icon" />
                            Dart
                        </li>
                        <li>
                            <img className={styles.icon} src="./images/js_icon.png" alt="JavaScript icon" />
                            JavaScript
                        </li>
                        <li>
                            <img className={styles.icon} src="./images/python.jpeg" alt="Python icon" />
                            Python
                        </li>
                        <li>
                            <img className={styles.icon} src="./images/ts-logo-128.png" alt="TypeScript icon" />
                            TypeScript
                        </li>
                        <li>
                            <img className={styles.icon} src="./images/CSS3_logo_and_wordmark.png" alt="CSS icon" />
                            CSS
                        </li>
                        <li>
                            <img className={styles.icon} src="./images/240px-HTML5_logo_and_wordmark.png" alt="HTML icon" />
                            HTML
                        </li>
                        <li>
                            <img className={styles.icon} src="./images/node_icon.png" alt="Node icon" />
                            Node.js
                        </li>
                        <li>
                            <img className={styles.icon} src="./images/mongo_icon.jpeg" alt="MongoDB icon" />
                            MongoDB
                        </li>
                        <li>
                            <img className={styles.icon} src="./images/elephant.png" alt="PostgreSQL icon" />
                            PostgreSQL
                        </li>
                        <li>
                            <img className={styles.icon} src="./images/31116.png" alt="Napping icon" />
                            Napping
                        </li>
                        <li>
                            <img className={styles.icon} src="./images/dog_icon.png" alt="Dog icon" />
                            Chilling with Dogs
                        </li>
                        <li>
                            <img className={styles.icon} src="./images/305073.png" alt="Judgment icon" />
                            Judging Neighbors
                        </li>
                    </ul>
                    <p className={styles.list_label}>Find me elsewhere!</p>
                    <div className={styles.right}>
                        <a href="https://www.linkedin.com/in/eliott-davidson" target='_blank'>
                            <img className={styles.icon} src="./images/LI-In-Bug.png" alt="LinkedIn icon" />
                            LinkedIn
                        </a> 
                        <a href="https://www.github.com/fussypuppet" target='_blank'>
                            <img className={styles.icon} src="./images/GitHub-Mark-120px-plus.png" alt="GitHub icon" />
                            GitHub
                        </a>
                    </div>
                    <p className={styles.list_label}>Or shoot me an email:</p>
                        <a className={styles.right} href="mailto:eliott.davidson@gmail.com" target='_blank'>eliott.davidson@gmail.com</a>
                </div>    
            </main>
            <Footer />
        </>
    )
}