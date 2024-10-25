import Link from "next/link";
import Image from "next/image";

import styles from "./Card.module.css";

export default function Card({ link, img, desc, title }) {
  return (
    <Link className={styles.card} href={link} target="_blank">
      <>
        <div className={styles.image__container}>
          <Image src={img} alt="" fill />
        </div>
        <div className={styles.content}>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </>
    </Link>
  );
}
