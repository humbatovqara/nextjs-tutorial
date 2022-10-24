import Link from "next/link";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <h1>About page</h1>
      <Link href="/">Back to Home page</Link>
      <style jsx>{`
        h1 {
          color: lime;
        }
      `}</style>
    </>
  );
}
