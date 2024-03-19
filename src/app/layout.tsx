import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import Header from '../components/Header';
import Footer from '../components/Footer';
import './style.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ben Maldonado's website.",
  description: "An app for displaying Ben's cutting-edge skills in Web Development and Programming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
              rel="stylesheet" integrity="sha384-
              EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
              crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossOrigin="anonymous"></script>
      </Head>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
