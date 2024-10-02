import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Sakkiz - Seamless Communication at Your Fingertips",
  description:
    "Experience lightning-fast messaging with Sakkiz. Stay connected with friends and family, discover advanced privacy settings, and uncover unique features designed to enhance your communication.",
  keywords:
    "messaging, instant messaging, stay connected, privacy settings, communication, Sakkiz,  group chat, multimedia sharing, secure messaging, text messaging, video calls, voice messages, online chat, mobile messaging, real-time communication, user-friendly messaging app, cross-platform messaging, social connectivity, chat features, messaging security, connect with friends, family communication, chatbots, notifications, customizable chat experience, fast messaging",
  openGraph: {
    title: "Sakkiz - Seamless Communication",
    description:
      "Stay connected with Sakkiz's fast messaging and unique features that enhance your communication experience.",
    type: "website",
    url: "https://sakkiz.netlify.app",
    images: [
      {
        url: "https://sakkiz.netlify.app/test.png",
        width: 1200,
        height: 630,
        alt: "Sakkiz Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <body className="container">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
