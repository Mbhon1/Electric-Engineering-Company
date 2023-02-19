import Head from "next/head";
import Layout, { siteTitle } from "@/layouts/layout";
import CompProjects from "@/components/CompProjects";
import { Inter, Oi } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "700" });
const oi = Oi({ subsets: ["cyrillic"], weight: "400" });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={`px-5 pt-20 uppercase animate-bounce ${oi.className}`}>
        <h1 className="text-4xl">
          <span className="text-red-600">Welcome to</span>{" "}
          <span className="text-yellow-400">Dreadlocks</span>{" "}
          <span className="text-green-500">Nation</span>
        </h1>
      </div>
      <CompProjects />
      <div className={`px-6 py-10 text-white ${inter.className}`}>
        <h2 className="text-3xl">Lorem Ipsum</h2>
        <p className="py-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos neque
          esse suscipit corporis itaque incidunt libero, cupiditate
          voluptatibus, consectetur asperiores enim sed quis. At consequuntur
          laborum, pariatur cupiditate eaque rem.
        </p>
      </div>
    </Layout>
  );
}
