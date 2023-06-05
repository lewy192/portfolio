import React from "react";
import styles from "./projectcard.module.css";
import Image from "next/image";

export const ProjectCard = ({ title, photo, link, skills }) => {
    return (
        <div className={styles.card}>
            <div className={styles.photoContainer}>
                <Image src={photo} className={styles.photo} />
            </div>
            <ul className={styles.skills}>
                {skills.map((skill) => (
                    <li key={skill} className={styles.skillItem}>
                        {skill}
                    </li>
                ))}
            </ul>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                This project is awesome and i made it
                <a href={link} className={styles.link}>
                    Github {"=>"}
                </a>
            </div>
        </div>
    );
};
