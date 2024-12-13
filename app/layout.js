import localFont from "next/font/local";
import "./globals.css";
import { Navbar, Footer } from "@/components";
import { getLocale, getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "EITA",
  description: "Created by University Students",
};

export default async function RootLayout({ children }) {

  const locale = await getLocale()

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col gap-8`}
      >
        <NextIntlClientProvider messages = {messages}>
        <Navbar />
        {children}
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
