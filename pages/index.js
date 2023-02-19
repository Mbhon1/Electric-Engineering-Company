import Head from "next/head";
import Layout, { siteTitle } from "@/layouts/layout";
import CompProjects from "@/components/CompProjects";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="px-5 pt-7 animate-pulse">
        <h1 className={`text-5xl ${inter}`}>
          <span className="text-red-600">Welcome</span> to{" "}
          <span className="text-yellow-400">Dreadlocks</span>{" "}
          <span className="text-green-500">Nation</span>
        </h1>
      </div>
      <CompProjects />
    </Layout>
  );
}
