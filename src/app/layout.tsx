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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#1B3FA0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Prevent flash of wrong theme on load */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var saved = localStorage.getItem('tol-theme');
              var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              var isDark = saved ? saved === 'dark' : prefersDark;
              document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
              var meta = document.querySelector('meta[name="theme-color"]');
              if (meta) meta.setAttribute('content', isDark ? '#12141F' : '#1B3FA0');
            } catch(e) {}
          })();
        ` }} />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
