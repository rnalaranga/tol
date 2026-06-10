import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Orient Life | Empowering Sri Lanka with Micro Finance & Consumer Products",
  description:
    "Orient Life Pvt Ltd is Sri Lanka's trusted partner for Micro Finance, offering accessible small business loans, consumer products on easy instalments, and group loans to empower local communities.",
  keywords: "Micro Finance Sri Lanka, Small Business Loans, Daily Collection Loans, Group Loans, Sahana Scheme, Consumer Products, Orient Life, Zero Interest Instalments",
  openGraph: {
    title: "The Orient Life | Empowering Sri Lanka with Micro Finance & Consumer Products",
    description: "Trusted micro finance and consumer product solutions for Sri Lankan families.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
