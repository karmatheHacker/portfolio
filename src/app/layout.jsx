import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import NavigationBar from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import TopLoader from "@/components/top-loader";
import OnekoCat from "@/components/OnekoCat";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTopButton } from "@/components/scroll-to-top";
import WebMcpProvider from "@/components/webmcp-provider";

export const metadata = {
  title: {
    template: "Rabin - %s  ",
    default: "Rabin - Aspiring AI Engineer",
  },
  description:
    "Hello there I am Rabin an aspiring ai engineer and I love to build products that make people's life easier.",
  keywords: [
    "Rabindranath Chatterjee",
    "Aspiring AI Engineer",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Web Development",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Rabindranath Chatterjee" }],
  creator: "Rabindranath Chatterjee",
  publisher: "Rabindranath Chatterjee",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shiva.codes",
    title: "Rabindranath Chatterjee - Full Stack Developer",
    description:
      "Hello there I am Rabin a full stack developer and I love to build products that make people's life easier.",
    siteName: "Rabindranath Chatterjee Portfolio",
    images: [
      {
        url: "https://shiva.codes/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Rabindranath Chatterjee - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabindranath Chatterjee - Full Stack Developer",
    description:
      "Hello there I am Rabin a full stack developer and I love to build products that make people's life easier.",
    images: ["https://shiva.codes/opengraph.png"],
    creator: "@karmaisgoatt",
  },
  alternates: {
    canonical: "https://shiva.codes",
  },
};


import { Space_Mono } from "next/font/google";
import { GeistPixelSquare } from "geist/font/pixel";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rabindranath Chatterjee",
    jobTitle: "Full Stack Developer",
    description:
      "Full stack developer who loves to build products that make people's life easier",
    url: "https://shiva.codes",
    image: "https://shiva.codes/opengraph.png",
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceMono.variable} ${GeistPixelSquare.variable}`}
    >
      <head>
        <meta name="theme-color" content="#0B0D0E" />
        <meta name="color-scheme" content="dark light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TopLoader />
          <SmoothScrollProvider>
            <div className="grid min-h-[100dvh] grid-rows-[1fr_auto] overflow-x-hidden">
              <main
                className={`max-w-[1800px] px-6 pt-14 md:mx-auto md:px-0 md:pt-24`}
              >
                <OnekoCat />
                {children}
              </main>
              <Footer />
              <NavigationBar />
              <Toaster />
              <ScrollToTopButton />
              <WebMcpProvider />
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
