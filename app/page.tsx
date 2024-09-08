'use client'
import styles from "./page.module.css";
import Scene from "@/components/Scene";
import Form from "@/components/Form";
import DarkMode from "@/components/DarkMode";
import { useAppSelector } from "@/store/store";

export default function Home() {
  const darkMode = useAppSelector(state => state.darkMode.darkMode)

  return (
    <main className={styles.main} style={{ height: '100vh', backgroundColor: darkMode ? "black" : "" }}>
      <DarkMode />
      <Form />
      <Scene/>
    </main>
  );
}
