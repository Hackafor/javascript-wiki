import Head from 'next/head';
import Navbar from '../Componentes/Navbar';
import Footer from '../Componentes/Footer';
import { ReactNode } from 'react';

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
      <Navbar />
      <main className="px-4 md:px-[110px] mx-auto p-4">{children}</main>
      <Footer />
    </>
  );
}
