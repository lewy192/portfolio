import Image from "next/image";
import styles from "./page.module.css";
import Intro from "../Components/Intro/intro";
import { Quote } from "@/Components/quote/quote";
import { Projects } from "@/Components/Projects/Projects";
import { Skills } from "@/Components/Skills/Skills";
import { About } from "@/Components/About/About";

export default function Home() {
    return (
        <main className={styles.main}>
            <Intro />
            <Quote />
            <Projects />
            <Skills />
            <About />
        </main>
    );
}
