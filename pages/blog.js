import NavBar from '../components/navbar'
import Post from '../components/post'
import { useState } from 'react'

export default function Blog() {
    const [postsContent, setPostsContent] = useState([
        {title: "I did a blog!", text: "I feel so hip now"},
        {title: "React is so fun!", text: "wheee"},
        {title: "React is sometimes fun", text: "yeah"}
    ])
    return (
        <>
            <NavBar />
            <main>
                <h2>Read this Blog!</h2>
                {postsContent.map(post => (
                    <Post postInfo={post} />
                ))}
            </main>
            <footer className={styles.footer}>
                <p>©2020 Eliott Davidson</p>
            </footer>
        </>
    )
}