import React from "react";
import { Separator } from "../Separator/Separator";
import styles from "./skills.module.css";

const languages = ["JavaScript", "Python", "Bash", "SQL"];
const databases = ["Postgresql", "mySQL", "MongoDB"];
const frameworks = ["React", "NextJs", "Express", "Prisma"];
const tools = [
    "GraphQL",
    "Splunk",
    "Jira",
    "Confluence",
    "Docker",
    "Material Ui",
    "Oauth",
    "JWT",
    "HTML",
    "CSS",
    "SASS",
];

const skillsContainers = [
    { title: "languages", skills: languages },
    { title: "databases", skills: databases },
    { title: "frameworks", skills: frameworks },
    { title: "tools", skills: tools },
];

export const Skills = (props) => {
    return (
        <div className={styles.skills}>
            <Separator dividerLength={"40"} title={"Skills"} />
            {skillsContainers.map((skills, index) => (
                <div key={index} className={`${styles.container}`}>
                    <h1 className={styles.header}>{skills.title}</h1>
                    <ul className={styles.skillsList}>
                        {skills.skills.map((skill, index) => (
                            <li className={styles.skill} key={index}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
