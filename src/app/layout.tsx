import { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './style.css'; // Import global styles

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
	<Header />
        <main>{children}</main>
	<Footer />
      </body>
    </html>
  )
}
