import type { Metadata } from "next";
import { Readex_Pro, IBM_Plex_Sans_Arabic } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import "./globals.css";

/* ─── Arabic Fonts ─── */
const readexPro = Readex_Pro({
  subsets: ["arabic"],
  variable: "--font-readex-pro",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

/* ─── SEO Metadata ─── */
export const metadata: Metadata = {
  metadataBase: new URL("https://masgroup.co"),
  title: {
    default: "MAS Group — د.م. مجد مصطفى العويني | الهندسة المعمارية والتصميم الداخلي",
    template: "%s | MAS Group",
  },
  description:
    "مكتب معماري متخصص في التصميم المعماري والتصميم الداخلي. نقدم تصاميم مبتكرة تجمع بين الجمال والوظيفة.",
  keywords: [
    "معمارية",
    "تصميم معماري",
    "تصميم داخلي",
    "مهندسة معمارية",
    "MAS Group",
    "مجد العويني",
    "هندسة معمارية",
    "استشارات تصميم",
  ],
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://masgroup.co",
    siteName: "MAS Group",
    title: "MAS Group — الهندسة المعمارية والتصميم الداخلي",
    description:
      "مكتب معماري متخصص في التصميم المعماري والتصميم الداخلي.",
    images: [
      {
        url: "/og-image.jpg", // TODO: Add real OG image
        width: 1200,
        height: 630,
        alt: "MAS Group — الهندسة المعمارية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAS Group — الهندسة المعمارية والتصميم الداخلي",
    description:
      "مكتب معماري متخصص في التصميم المعماري والتصميم الداخلي.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${readexPro.variable} ${ibmPlexArabic.variable}`}>
      <body className="font-body antialiased bg-charcoal text-warm-gray min-h-screen overflow-x-hidden">
        {/* Blueprint grid background */}
        <div className="fixed inset-0 blueprint-bg pointer-events-none z-0" aria-hidden="true" />

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main className="relative z-10 pt-16 md:pt-20">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating contact button */}
        <FloatingContact />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "د.م. مجد مصطفى العويني",
              jobTitle: "مهندسة معمارية",
              url: "https://masgroup.co",
              sameAs: [],
              worksFor: {
                "@type": "Organization",
                name: "MAS Group",
                url: "https://masgroup.co",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "MAS Group",
              description:
                "مكتب معماري متخصص في التصميم المعماري والتصميم الداخلي",
              url: "https://masgroup.co",
              founder: {
                "@type": "Person",
                name: "د.م. مجد مصطفى العويني",
              },
              serviceType: [
                "تصميم معماري",
                "تصميم داخلي",
                "استشارات تصميم",
                "إدارة مشاريع",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
