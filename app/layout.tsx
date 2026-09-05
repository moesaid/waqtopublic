import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WAQTO LLC — Software & Engineering",
  description:
    "WAQTO LLC builds Duha, Sleep Key, and HoopsGo, and runs a community SMS program for people who opt in to texts from WAQTO LLC.",
  openGraph: {
    title: "WAQTO LLC — Software & Engineering",
    description:
      "WAQTO LLC products and community SMS: Duha, Sleep Key, HoopsGo — opt in to hear from WAQTO LLC.",
    url: "https://waqto.com",
    siteName: "WAQTO LLC",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#070b12",
};

const navLinkClass =
  "text-xs text-zinc-400 transition hover:text-zinc-200 sm:text-sm";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ colorScheme: "dark", backgroundColor: "#070b12" }}
    >
      <head>
        <meta name="color-scheme" content="dark only" />
      </head>
      <body
        className="flex min-h-full flex-col bg-[#070b12] text-zinc-100"
        style={{ backgroundColor: "#070b12", color: "#ededed" }}
      >
        <div className="relative flex min-h-full flex-1 flex-col overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.18),transparent)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
          />

          <header className="relative z-10 flex items-center justify-between gap-4 px-6 py-6 sm:px-10">
            <Link
              href="/"
              className="shrink-0 font-mono text-sm font-medium tracking-[0.35em] text-sky-400"
            >
              WAQTO LLC
            </Link>
            <nav
              aria-label="Primary"
              className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2"
            >
              <Link href="/messaging/" className={navLinkClass}>
                Messaging
              </Link>
              <Link href="/privacy/" className={navLinkClass}>
                Privacy
              </Link>
              <Link href="/terms/" className={navLinkClass}>
                Terms
              </Link>
            </nav>
          </header>

          <div className="relative z-10 flex flex-1 flex-col">{children}</div>

          <footer className="relative z-10 border-t border-white/5 px-6 py-6 sm:px-10">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
              <p className="text-xs text-zinc-500">
                &copy; {year} WAQTO LLC. All rights reserved.
              </p>
              <p className="text-xs text-zinc-600">
                301 Midland Ave, Carnegie, PA 15106 · EIN 86-2401948
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                <Link
                  href="/messaging/"
                  className="text-xs text-zinc-500 underline-offset-4 hover:text-zinc-300 hover:underline"
                >
                  Messaging
                </Link>
                <Link
                  href="/privacy/"
                  className="text-xs text-zinc-500 underline-offset-4 hover:text-zinc-300 hover:underline"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms/"
                  className="text-xs text-zinc-500 underline-offset-4 hover:text-zinc-300 hover:underline"
                >
                  Terms of Use
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
