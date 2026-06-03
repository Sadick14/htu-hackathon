import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CompSSA Hackathon 2026 | Ho Technical University",
  description: "Official CompSSA Hackathon 2026 landing page organized by HTU Computer Science Students Association and axlr8. Build, innovate, code, and win GHS 3,000!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
