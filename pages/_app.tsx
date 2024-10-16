import "@/styles/globals.css";
import "@/styles/navbar.css";
import type { AppProps } from "next/app";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="{montserrat.className}">
        <Component {...pageProps} />
      </main>
    </>
  );
}
