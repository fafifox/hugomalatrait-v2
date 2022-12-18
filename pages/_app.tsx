import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { Barlow } from "@next/font/google";

const barlow = Barlow({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
        <style jsx global>
        {`
          :root {
            --barlow-font: ${barlow.style.fontFamily};
          }
        `}
        </style>
            <Component {...pageProps} />
        </>
    );
}
