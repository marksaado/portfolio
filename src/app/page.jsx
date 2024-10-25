import Hero from "@/components/Hero/Hero";
import styles from "./page.module.css";
import MyWork from "@/components/MyWork/MyWork";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <MyWork />

      <Footer />
    </>
  );
}
