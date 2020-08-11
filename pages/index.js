import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar'

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
          <h2>Home</h2>
          <p className={styles.card}>Hi!  I'm Eliott.  I'm a software engineer in training with a background ranging from mail delivery to biology research to social work. Whether it is answering unknowns about cellular function, delivering the most mail in the shortest time, translating confusing documents into approachable language, or designing code, I'm driven by a desire to distill complicated problems down to their core issues and deliver value, clarity, & efficiency. </p>
      </main>

      <footer className={styles.footer}>
        <h3>Ooh neat, it'd be fun to do something with a footer</h3>
      </footer>
    </div>
  )
}
