import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.welcome}>
        <h1>welcome to job board</h1>
        <p>Find your next job here</p>
      </section>
      <section>
        <h2>Jobs</h2>
        <p>Find your next job here</p>
      </section>
    </main>
  );
}
