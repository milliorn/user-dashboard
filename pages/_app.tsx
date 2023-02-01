import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

// https://stackoverflow.com/a/58166637/11986604
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  );
}
