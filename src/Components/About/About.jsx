import React from "react";
import styles from "./about.module.css";
import { Separator } from "../Separator/Separator";
import Image from "next/image";
import decks from "../../../public/decks.png";
import dots from "../../../public/dots.svg";

export const About = (props) => {
    return (
        <div className={styles.about}>
            <Separator title={"About"} dividerLength={"20"} />

            <div className={styles.aboutContainer}>
                <div className={styles.left}>
                    A dedicated Software Developer, with an emphasis on Full
                    Stack Development, who thrives on challenges, embracing new
                    learning opportunities.
                    <br /> <br />
                    Enjoys working with a variety of technologies to gain fresh
                    perspectives on programming patterns and system development,
                    to leverage these insights in both commercial and
                    extracurricular projects. <br />
                    <br />A strong emphasis on writing maintainable code, whilst
                    striving to build optimised solutions and deliver creative
                    problem-solving approaches with React, NodeJs and Python.{" "}
                    <br />
                    <br />
                </div>
                <div className={styles.right}>
                    <Image src={dots} className={styles.dots} alt="" />
                    <Image
                        src={decks}
                        className={styles.decks}
                        alt="Lewis mixing music on dj decks"
                    />
                </div>
            </div>
        </div>
    );
};
