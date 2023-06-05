"use client";
import React from "react";
import styles from "./projects.module.css";
import { Separator } from "../Separator/Separator";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import amd from "../../../public/amdLogo.jpeg";

export const Projects = (props) => {
    return (
        <div className={styles.projects}>
            <Separator title={"Projects"} dividerLength={"60"} />
            <ProjectCard
                title={"Testing"}
                photo={amd}
                link="google.com"
                skills={["React", "GraphQL", "Mysql"]}
            />
            <ProjectCard
                title={"Testing"}
                photo={amd}
                link="google.com"
                skills={["React", "GraphQL", "Mysql"]}
            />
            <ProjectCard
                title={"Testing"}
                photo={amd}
                link="google.com"
                skills={["React", "GraphQL", "Mysql"]}
            />
        </div>
    );
};
