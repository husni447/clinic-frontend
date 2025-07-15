'use client';

import './globals.css';

import Footer from '@/components/Footer'   // default import
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
       
       
        <main className="flex-grow">{children}</main>
     <Footer />
      </body>
    </html>
  );
}