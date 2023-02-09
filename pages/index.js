import Head from "next/head";
import Layout, { siteTitle } from "@/layouts/layout";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Hero />
    </Layout>
  );
}
