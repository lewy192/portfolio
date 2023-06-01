import Image from "next/image";
import styles from "./page.module.css";
import Intro from "../Components/Intro/intro";
import { Quote } from "@/Components/quote/quote";

export default function Home() {
    return (
        <main className={styles.main}>
            <Intro />
            <Quote />
        </main>
    );
}
