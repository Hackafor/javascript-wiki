import Navbar from './Navbar';
import Footer from './Footer';
import { ReactNode } from 'react';
import Head from "next/head";

interface Props {
  children?: ReactNode;
  // any props that come into the component
  title?: string;
}

export default function Layout({ children, title = '' }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='container grid place-content-center min-w-full'>
      <Navbar />
      <main className="px-4 md:px-[110px] mx-auto p-4">{children}</main>
      </div>
      <Footer />
    </>
  );
}

