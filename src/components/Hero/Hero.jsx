import Image from "next/image";

import styles from "./Hero.module.css";

import banner from "../../public/banner.jpg";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.image__container}>
          <Image src={banner.src} alt="Mark Saado" fill />
        </div>

        <div className={styles.content}>
          <h1>Welcome</h1>
          <p>
            Mark Saado, een Full Stack Web Developer met expertise in front-end
            en back-end technologieën. Toegewijd aan het ontwikkelen van
            responsieve en gebruiksvriendelijke websites en webapplicaties, met
            een focus op Next.js voor front-end en Django REST API voor back-end
            ontwikkeling.
          </p>
        </div>
      </div>
      <svg
        className={styles.wave}
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z"
        ></path>
      </svg>
    </section>
  );
}
