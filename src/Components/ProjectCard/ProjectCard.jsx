import React from "react";
import styles from "./projectcard.module.css";
import Image from "next/image";

export const ProjectCard = ({
    title,
    photo,
    link,
    skills,
    desc,
    inProgress,
}) => {
    return (
        <div className={styles.card}>
            {photo ? <Image src={photo} className={styles.photo} /> : null}
            <ul className={styles.skills}>
                {skills.map((skill) => (
                    <li key={skill} className={styles.skillItem}>
                        {skill}
                    </li>
                ))}
            </ul>
            {inProgress ? (
                <div className={styles.inProgress}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18Z"
                            fill="var(--accent-color)"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 2C12.3632 2 12.6978 2.19689 12.8742 2.51436L22.8742 20.5144C23.0462 20.8241 23.0416 21.2017 22.8619 21.5071C22.6822 21.8125 22.3543 22 22 22H2C1.64568 22 1.31781 21.8125 1.13813 21.5071C0.958444 21.2017 0.95377 20.8241 1.12584 20.5144L11.1258 2.51436C11.3022 2.19689 11.6368 2 12 2ZM3.69951 20H20.3005L12 5.05913L3.69951 20ZM12 9C12.5523 9 13 9.44772 13 10V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V10C11 9.44772 11.4477 9 12 9Z"
                            fill="var(--accent-color)"
                        />
                    </svg>
                    <p className={styles.inProgressText}>- In Progress</p>
                </div>
            ) : null}
            <div
                className={styles.content}
                style={inProgress ? { padding: "0 1rem 1rem" } : {}}
            >
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.desc}>{desc}</p>
                <a href={link} className={styles.link}>
                    Github {"=>"}
                </a>
            </div>
        </div>
    );
};
