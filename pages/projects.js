import NavBar from '../components/navbar'
import Project from '../components/project'
import styles from '../styles/Home.module.css'

export default function Projects() {
    const projectsData = [
        {
            name: "Coop Accounts",
            description: "An app to keep track of coop shareholder HOA accounts",
            technologies: [
                {name: "Node", icon: "../images/node_icon.png"}, 
                {name: "PostgreSQL", icon: "../images/elephant.png"},
                {name: "Sequelize", icon: "../images/sequelize_logo.png"},
                {name: "Express.js", icon: "../images/express_logo.png"},
                {name: "EJS", icon: "../images/ejs_icon.ico"},
                {name: "CSS", icon: "../images/CSS3_logo_and_wordmark.png"},
                {name: "Bootstrap 4.5", icon: "../images/bootstrap_icon.png"}
            ],
            screenshotUrl: "../images/coopAccSS.png",
            deployUrl: "https://coop-accounts.herokuapp.com",
            gitHubUrl: ["https://github.com/fussypuppet/p2_coop_accounts"]
        },
        {
            name: "Oh No!",
            description: "A game inspired by Rogue",
            technologies: [
                {name: "JavasScript", icon: "../images/js_icon.png"}, 
                {name: "HTML", icon: "../images/240px-HTML5_logo_and_wordmark.png"},
                {name: "CSS Grid", icon: "../images/CSS3_logo_and_wordmark.png"}
            ],
            screenshotUrl: "../images/ohNoSS.png",
            deployUrl: "https://fussypuppet.github.io/project_1",
            gitHubUrl: ["https://github.com/fussypuppet/project_1"]
        },
        {
            name: "Reading Buddy",
            description: "An app made in collaboration with Emily Krauss, Charles Perry, and Scott McLeod.  Find your friends and see what books interest them as well as reviews they have written!",
            technologies: [
                {name: "React", icon: "../images/react_icon.png"},
                {name: "MongoDB", icon: "../images/mongo_icon.jpeg"},
                {name: "Express.js", icon: "../images/express_logo.png"},
                {name: "Node.js", icon: "../images/node_icon.png"},
                {name: "JavaScript", icon: "../images/js_icon.png"}
            ],
            screenshotUrl: "../images/readingBuddySS.png",
            deployUrl: "https://compassionate-swirles-569ce5.netlify.app/",
            gitHubUrl: ["https://github.com/fussypuppet/Frontend-Reading-Buddy", "https://github.com/fussypuppet/Backend-Reading-Buddy"]
        }
    ];
    //  name: "Tide Pool Finder"
    //  description: 
    //  screenshotUrl:
    //  deployUrl:
    //  gitHubUrl:  "https://github.com/fussypuppet/seir_526_p4"
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