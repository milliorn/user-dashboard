import { Html, Head, Main, NextScript } from "next/document";

// wrapper for next components
export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
