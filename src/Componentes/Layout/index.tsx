import Navbar from './Navbar';
import Footer from './Footer';
import { ReactNode } from 'react';
import Head from "next/head";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export default function Layout({ children }: Props) {
  return (
    <>
    <Head>
      <title></title>
    </Head>
    <div className='min-h-screen'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
    </>
  );
}
