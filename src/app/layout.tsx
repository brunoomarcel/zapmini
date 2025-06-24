import type React from "react";
import type { Metadata } from "next";
import Script from "next/script"; // <-- IMPORTA O Script do Next.js
import { Inter } from "next/font/google";
import "./globals.css";
export const dynamic = 'force-static';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gerador de Link WhatsApp",
  description: "Crie links personalizados para o WhatsApp facilmente",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        {/* Google Tag Manager - Script do Next.js */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MHRBV67C');
          `}
        </Script>

        <meta name="google-adsense-account" content="ca-pub-1967208140287135"/>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MHRBV67C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
