import NavBar from '../components/navbar'
import Footer from '../components/footer'
import { Document, Page } from 'react-pdf'
import styles from '../styles/Home.module.css'

export default function Resume() {
    return (
        <>
            <NavBar />
            <main>
                <h2>
                    Resume
                </h2>
                <a className={styles.link_button} href="../documents/ed_resume_09-01-2020.pdf" target="_blank">Download PDF</a>
                <Document file="../documents/ed_resume_09-01-2020.pdf">
                    <Page className={styles.centered} pageNumber={1} />
                </Document>
            </main>
            <Footer />
        </>
    )
}