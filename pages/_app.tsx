import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Barlow } from "@next/font/google";
import PlausibleProvider from "next-plausible";

const barlow = Barlow({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <PlausibleProvider domain="hugomalatrait.com">
            <style jsx global>
                {`
                    :root {
                        --barlow-font: ${barlow.style.fontFamily};
                    }
                `}
            </style>
            <Component {...pageProps} />
        </PlausibleProvider>
    );
}
