"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { MailtoButton } from "../UI/Button";
import styles from "./intro.module.css";
import Image from "next/image";
import portrait from "../../../public/portrait.png";
import box from "../../../public/box.svg";
import dots from "../../../public/dots.svg";

export default function Intro() {
    const ref = useRef(null);
    const [width, setWidth] = useState(100);
    useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
    }, []);
    return (
        <div className={styles.intro}>
            <div className={styles.left}>
                <h1 className={styles.header}>
                    Lewis is a{" "}
                    <span className={styles.headerHighlight}>
                        full-stack developer
                    </span>
                </h1>
                <div className={styles.descriptionContainer}>
                    <p className={styles.desc}>
                        He crafts responsive websites where technologies meet
                        creativity
                    </p>
                    <MailtoButton href="mailto:">Contact Me!</MailtoButton>
                </div>
            </div>
            <div className={styles.right}>
                <Image src={box} className={styles.box} alt="" />
                <Image
                    src={portrait}
                    ref={ref}
                    alt="portrait of lewis hill"
                    className={styles.portrait}
                />
                <Image src={dots} className={styles.dots} alt="" />

                <div
                    className={styles.imageFooter}
                    style={{ width: `${width}px` }}
                >
                    Currently working on{" "}
                    <span className={styles.statusHighlight}>Portfolio</span>
                </div>
            </div>
        </div>
    );
}
