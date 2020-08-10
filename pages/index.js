import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.main}>
          <h2>Home</h2>
          <p>So, um, this will eventually be my portfolio, but for now it's very much a work in progress</p>
      </main>

      <footer className={styles.footer}>
        <h3>Ooh neat, it'd be fun to do something with a footer</h3>
      </footer>
    </div>
  )
}
