import React from "react";
import styles from "./quote.module.css";
import quote from "../../../public/quote.svg";

export const Quote = (props) => {
    return (
        <figure className={styles.quoteContainer}>
            <quote className={styles.quote}>
                Development is like building lego with no piece limit
            </quote>
            <figcaption className={styles.caption}>- Lewis hill</figcaption>
        </figure>
    );
};
