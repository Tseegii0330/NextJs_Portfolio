import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tserendorj dev</title>
        <meta name="description" content="" />
      </Head>

      <Navbar />
      <Main />
    </div>
  );
}
