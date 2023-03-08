import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="dark:bg-slate-600 bg-[#F3F4F6] dark:text-gray-200 text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
