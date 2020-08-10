import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Navbar() {
    return (
        <>
            <Head>
                <title>Davidson Portfolio</title>
            </Head>
            <nav className={styles.nav}>
                <Link href="/">Home</Link> 
                <Link href="/about">About</Link> 
                <Link href="/projects">Projects</Link> 
                <Link href="/blog">Blog</Link> 
                <Link href="/resume">Resume</Link>
            </nav>
        </>
    )
}