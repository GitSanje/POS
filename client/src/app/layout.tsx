import { Inter } from "next/font/google";
import "./styles/globals.css";
import { Metadata } from 'next';
import page from "./auth/profile/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Vendify',
  description: 'The official Vendify.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
