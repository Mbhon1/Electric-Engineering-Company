import Head from "next/head";
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";
import { Inter } from "@next/font/google";

const inter = Inter({
  weight: ["700", "700"],
  subsets: ["latin"],
});

const name = "Hair Salon Company";
export const siteTitle = "Dreadlocks Nation";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="A hair salon stricly for dreadlocks."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${inter.className}`}>
        <MyHeader />
        <main>{children}</main>
        <MyFooter />
      </div>
    </div>
  );
}
