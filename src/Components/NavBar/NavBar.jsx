import Link from "next/link";
import styles from "./navbar.module.css";

const paths = [
    { path: "/", name: "home" },
    { path: "/about-me", name: "about-me" },
    { path: "/contact", name: "contact" },
];
export const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <h1 className={styles.logo}>
                Lewis
                <span className={styles.logoHighlight}> Hill</span>
            </h1>
            <div className={styles.navButtons}>
                {paths.map((path) => (
                    <Link
                        key={path.path}
                        href={path.path}
                        className={styles.navItem}
                    >
                        <span className={styles.accentChar}>{"<"}</span>
                        {path.name}
                        <span className={styles.accentChar}>{"/>"}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
};
