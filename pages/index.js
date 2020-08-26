import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar'

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
          <h2>Eliott Davidson</h2>
          <div className={styles.card}>
            <img className={styles.thumbnail} src='../images/me.jpeg' alt="photo of Eliott" />
            <p>Hi!  I'm Eliott.  I'm a software engineer with a background ranging from social work to biology research. Whether it is answering unknowns about cellular function, translating confusing documents into approachable language, or designing code, I'm driven by a desire to distill complicated problems down to their core issues and deliver value, clarity, & efficiency.</p>
          </div>
      </main>
      <footer className={styles.footer}>
        <p>©2020 Eliott Davidson</p>
      </footer>
    </div>
  )
}
