import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shams Ullah Baig - Full Stack Developer",
  description: "CS graduate passionate about full stack development. Seeking a role to build scalable web apps and solve real-world problems.",
  keywords: ["Full Stack Developer", "React.js", "Node.js", "JavaScript", "Web Development", "MongoDB", "MySQL"],
  authors: [{ name: "Shams Ullah Baig" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Shams Ullah Baig - Full Stack Developer",
    description: "CS graduate passionate about full stack development. Seeking a role to build scalable web apps and solve real-world problems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shams Ullah Baig - Full Stack Developer",
    description: "CS graduate passionate about full stack development. Seeking a role to build scalable web apps and solve real-world problems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
