import React from "react";
import { MailtoButton } from "../UI/Button";
import styles from "./intro.module.css";

export default function Intro() {
    return (
        <div>
            <div>
                <h1 className={styles.header}>
                    LEWIS IS A{" "}
                    <span className={styles.headerHighlight}>
                        FULL-STACK DEVELOPER
                    </span>
                </h1>
                <p></p>
                <MailtoButton href="mailto:">Contact Me!</MailtoButton>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
