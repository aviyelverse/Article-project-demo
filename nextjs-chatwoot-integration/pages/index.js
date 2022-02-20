import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
import ChatwootWidget from "../components/ChatwootWidget";

export default function Home(props) {
  const url = "http://localhost:3000/api/posts";

  const { data, error } = useSWR(
    url,
    async () => {
      const res = await fetch(url);
      return res.json();
    },
    { initialData: props, revalidateOnMount: true }
  );

  if (error) {
    return <div>Failed to Load Data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const { posts } = data;
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs chatwoot integration</title>
        <meta name="description" content="Nextjs chatwoot integration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nodejs.org">Nextjs Blog</a>
        </h1>

        <div className={styles.grid}>
          {posts.map((item, index) => (
            <div className={styles.card}>
              <h3 className={styles.card_title} key={item}>
                {item.title}
              </h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <ChatwootWidget />
      </footer>
    </div>
  );
}
