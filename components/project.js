
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
                        <li>{tech}</li>
                    ))}
                </ul>
            </div>
            <p>On Github: <a href={props.projectData.gitHubUrl} target='_blank'>{props.projectData.gitHubUrl}</a></p>
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