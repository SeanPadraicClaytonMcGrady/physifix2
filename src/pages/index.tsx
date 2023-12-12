import Head from "next/head";
import { AuthShowcase } from "./components/AuthShowcase";
import { BodyModel } from "./components/BodyModel";

export default function Home() {
  return (
    <>
      <Head>
        <title className="">Physifix</title>
        <meta
          name="description"
          content="A self-diagnosis app for aches & pains"
        />
      </Head>
      <AuthShowcase />
      <BodyModel />
    </>
  );
}
