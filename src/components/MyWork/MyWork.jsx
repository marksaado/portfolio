import Image from "next/image";

import styles from "./MyWork.module.css";
import Card from "./Card/Card";
import bewust from "../../public/bewust.PNG";
import capri from "../../public/capri.PNG";
import taoos from "../../public/taoos.PNG";

import sun from "../../public/aun.PNG";

import dimr from "../../public/dimr.PNG";
import sport from "../../public/sport.PNG";
import work from "../../public/work.PNG";

export default function MyWork() {
  return (
    <section>
      <div className={styles.container}>
        <h2>Mijn Werk</h2>
        <p>Een verzameling van projecten waaraan ik heb gewerkt. </p>

        <div className={styles.row}>
          <Card
            title={"bewustmakers"}
            img={bewust.src}
            link={"https://www.bewustmakers.nl/"}
            desc={
              "Een strategisch netwerk voor zakelijke diensten. Ik heb de backend gebouwd met Django en de frontend ontwikkeld met Next.js, op basis van ontwerpen van het bedrijf."
            }
          />
          <Card
            title={"stichtingcapri"}
            img={capri.src}
            link={"https://stichtingcapri.nl/"}
            desc={
              "Een non-profit platform ter ondersteuning van onderzoek naar uitgezaaide prostaatkanker. Ik heb de backend gebouwd met Django en de frontend met Next.js, waarbij de website voldoet aan de regelgeving en kwaliteitsnormen. Ontwerpen werden aangeleverd door de klant."
            }
          />
          <Card
            title={"workspace4u"}
            img={work.src}
            link={"https://workspace4u.nl/"}
            desc={
              "Herontworpen en herstructureerde een website voor kantoor- en werkplekverhuur in de Performance Factory. Frontend en backend gebouwd in WordPress, waarbij de homepage is vereenvoudigd en de navigatie is geoptimaliseerd."
            }
          />
          <Card
            title={"pf-sport"}
            img={sport.src}
            link={"https://pf-sport.nl/"}
            desc={
              "Website voor het reserveren van sportfaciliteiten bij Performance Factory. Ik heb de backend gebouwd met Django en de frontend met Next.js, met een focus op gebruiksvriendelijke boekingen en responsief ontwerp."
            }
          />
          <Card
            title={"dimr"}
            img={dimr.src}
            link={"https://dim-r.nl/"}
            desc={
              "Een zakelijke website voor een ondernemer, gebouwd in Next.js met visuele elementen aangeleverd door een marketeer. Aangepast ontwerp en functionaliteit voor een professionele online presentatie."
            }
          />
          <Card
            title={"taousscatering"}
            img={taoos.src}
            link={"https://taousscatering.nl/"}
            desc={
              "Website voor catering en evenementbeheer, gespecialiseerd in Marokkaanse bruiloften en evenementen. Backend ontwikkeld met Django en frontend met Next.js, aangepast aan het door de klant aangeleverde ontwerp."
            }
          />
        </div>
      </div>
    </section>
  );
}
