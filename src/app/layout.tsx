import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { LeadPopup } from "@/components/forms/LeadPopup";
import { SITE_URL } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/wp-content/uploads/2023/07/cropped-NEW-FAV-ICON-32x32.webp", sizes: "32x32" },
      { url: "/wp-content/uploads/2023/07/cropped-NEW-FAV-ICON-192x192.webp", sizes: "192x192" },
    ],
    apple: "/wp-content/uploads/2023/07/cropped-NEW-FAV-ICON-180x180.webp",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#01686a",
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US">
      <body className="bg-white">
        {GTM_ID && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:bg-white focus:p-2">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingButtons />
        <LeadPopup />
      </body>
    </html>
  );
}
