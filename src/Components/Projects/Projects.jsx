import React from "react";
import styles from "./projects.module.css";
import { Separator } from "../Separator/Separator";
import { ProjectCard } from "../ProjectCard/ProjectCard";

import test from "../../../public/test.svg";
import noDistract from "../../../public/noDistract.svg";

export const Projects = (props) => {
    return (
        <div className={styles.projects}>
            <Separator title={"Projects"} dividerLength={"60"} />
            <ProjectCard
                title={"S2B"}
                photo={test}
                link="#"
                desc={
                    "A Locally hosted web ui for converting songs from spotify to beatport, a DJ streaming service"
                }
                skills={["TypeScript", "Spotify API", "Beatport API", "Oauth"]}
                inProgress={true}
            />
            <ProjectCard
                title={"No Distract"}
                photo={noDistract}
                link="#"
                skills={["NextJS", "Postgresql", "CSS Modules", "JS"]}
                inProgress={true}
                desc={
                    "Dont distract your friends, an app that lets you catch up only if you're both free"
                }
            />
            <ProjectCard
                title={"Portfolio - This one"}
                link="#"
                skills={["NextJS", "CSS Modules", "JS"]}
                inProgress={true}
                desc={
                    "A personal brand site to display who i am and what im all about."
                }
            />
        </div>
    );
};
