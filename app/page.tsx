import Image from "next/image";
import styles from "./page.module.css";
import Scene from "@/components/Scene";
import Form from "@/components/Form";
export default function Home() {
  return (
    <main className={styles.main} style={{ height: '100vh' }}>
      <Form />
      <Scene/>
    </main>
  );
}
