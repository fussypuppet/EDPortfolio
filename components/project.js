
import styles from '../styles/Home.module.css'

export default function Project(props) {
    return (
        <div className={styles.card}>
            <h3>{props.projectData.name}</h3>
            <p>
                <a href={props.projectData.deployUrl} target='_blank'>{props.projectData.deployUrl}</a>
            </p>
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
                <p>On Github:</p>
                {props.projectData.gitHubUrl.map(url => (
                    <p><a href={url} target='_blank'>{url}</a></p>
                ))}
            </div>
            <style jsx>
                {`
                    .techs {
                        width: 100%;
                    }
                    .app-screenshot{
                        display: block;
                        height: 240px;
                        margin: auto;
                    }
                `}
            </style>
        </div>
    )
}