import styles from '../styles/Home.module.css'

export default function Post(props) {
    return (
        <div className={styles.card}>
            <h3>{props.postInfo.title}</h3>
            <p>{props.postInfo.text}</p>
        </div>
    )
}