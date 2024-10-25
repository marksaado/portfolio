import Link from "next/link";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <svg
        className={styles.wave}
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="rgb(10, 0, 27)"
          d="M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z"
        ></path>
      </svg>
      <div className={styles.container}>
        <a href="mailto:saadomark@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={`bi bi-envelope ${styles.icon}`}
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
          </svg>
          <span>saadomark@gmail.com</span>
        </a>
        <a href="tel:++31658946306">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={`bi bi-phone ${styles.icon}`}
            viewBox="0 0 16 16"
          >
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
          </svg>
          <span>6 58 94 6 306</span>
        </a>
      </div>
    </footer>
  );
}
