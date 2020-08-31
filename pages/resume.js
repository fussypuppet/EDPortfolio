import NavBar from '../components/navbar'
import { Document, Page } from 'react-pdf'
import styles from '../styles/Home.module.css'

export default function Resume() {
    return (
        <>
            <NavBar />
            <main>
                <Document file="../documents/ed_resume_08-31-2020.pdf">
                    <Page className={styles.centered} pageNumber={1} />
                </Document>
            </main>
            <footer className={styles.footer}>
                <p>©2020 Eliott Davidson</p>
            </footer>
        </>
    )
}