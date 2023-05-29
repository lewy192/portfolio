"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { MailtoButton } from "../UI/Button";
import styles from "./intro.module.css";
import Image from "next/image";
import portrait from "../../../public/portrait.svg";
import styled from "styled-components";

const MailtoButtonCustom = styled(MailtoButton)`
    align-self: flex-end;
    transform: translateX(-4px);
`;

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
                    <MailtoButtonCustom href="mailto:">
                        Contact Me!
                    </MailtoButtonCustom>
                </div>
            </div>
            <div className={styles.right}>
                <Image src={portrait} width="100%" height="100%" ref={ref} />

                <div
                    className={styles.imageFooter}
                    style={{ width: `${width}px` }}
                >
                    Currently working on <b>Portfolio</b>
                </div>
            </div>
        </div>
    );
}
