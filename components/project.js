
import styles from '../styles/Home.module.css'

export default function Project(props) {
    return (
        <div className={styles.card}>
            <h3>{props.projectData.name}</h3>
            <p>{props.projectData.description}</p>
            <img className={styles.app_screenshot} src={props.projectData.screenshotUrl} alt={`screenshot of ${props.projectData.name} app`} />
            <div className={styles.techs}>
                <p className={styles.list_label}>Technologies Used:</p>
                <ul>
                    {props.projectData.technologies.map(tech => (
                        <li><img className={styles.icon} src={tech.icon} alt={tech.name + " icon"}></img> {tech.name}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.project_section}>
                <a className={styles.link_button} href={props.projectData.deployUrl} target='_blank'>Deployed app</a>
                {props.projectData.gitHub.map(repository => (
                    <p><a className={styles.link_button} href={repository.url} target='_blank'>{repository.name}</a></p>
                ))}
            </div>
        </div>
    )
}