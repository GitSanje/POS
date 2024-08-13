import { Inter } from "next/font/google";
import "./styles/globals.css";
import { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: '',
  description: 'The official Coding Beauty home page.',
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
