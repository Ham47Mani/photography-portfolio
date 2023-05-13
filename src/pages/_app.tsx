import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import {Expletus_Sans} from "@next/font/google";

const ExpletusSans = Expletus_Sans({
  subsets: ['latin'],
  variable: "--font-expletus"
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${ExpletusSans.variable} font-ExpletusSans`}>
      <Component {...pageProps} />
    </div>
  )
}
