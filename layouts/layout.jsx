import Head from "next/head";
import Link from "next/link";
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";

const name = "Engineering Company";
export const siteTitle = "Engineering Company";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta name="description" content="A electric engineering company." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyHeader />
      <main>{children}</main>
      <MyFooter />
    </div>
  );
}
