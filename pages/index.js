import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar'

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
          <h2>Home</h2>
          <p className={styles.card}>Hi!  I'm Eliott.  I'm a software engineer with a background ranging from social work to biology research. Whether it is answering unknowns about cellular function, translating confusing documents into approachable language, or designing code, I'm driven by a desire to distill complicated problems down to their core issues and deliver value, clarity, & efficiency. </p>
      </main>

      <footer className={styles.footer}>
        <h3></h3>
      </footer>
    </div>
  )
}
