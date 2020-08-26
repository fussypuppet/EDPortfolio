import NavBar from '../components/navbar'
import Project from '../components/project'
import styles from '../styles/Home.module.css'

export default function Projects() {
    const projectsData = [
        {
            name: "Coop Accounts",
            description: "An app to keep track of coop shareholder HOA accounts",
            technologies: ["Node", "PostgreSQL", "Sequelize", "Express", "EJS", "CSS", "Bootstrap 4.5"],
            screenshotUrl: "../images/coopAccSS.png",
            deployUrl: "https://coop-accounts.herokuapp.com",
            gitHubUrl: "https://github.com/fussypuppet/p2_coop_accounts",
        },
        {
            name: "Oh No!",
            description: "A game inspired by Rogue",
            technologies: ["Javascript", "HTML", "CSS Grid"],
            screenshotUrl: "../images/ohNoSS.png",
            deployUrl: "https://fussypuppet.github.io/project_1",
            gitHubUrl: "https://github.com/fussypuppet/project_1"
        }
    ];
    return (
        <>
            <NavBar />
            <main>
                <h2>Projects</h2>
                {projectsData.map(project => (
                    <Project projectData={project} />
                ))}
            </main>
            <footer className={styles.footer}>
                <p>©2020 Eliott Davidson</p>
            </footer>
        </>
    )
}