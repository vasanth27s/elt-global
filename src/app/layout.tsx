

import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";
import { Outfit } from "next/font/google";
import { AppProvider } from "./_utils/AppContext";




const inter = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ELT GLOBAL",
  description: "ELT GLobal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">

      <body className={`${inter.className} bg-slate-200`}
      >
        <AppProvider>
      
          <div className=" flex-row md:flex h-14 md:h-screen w-screen ">
            
            <Sidebar />
            <div className="w-full h-screen flex flex-col">

              <Navbar />

              <div className="h-full">
                {children}
              </div>
            </div>

          </div>
        </AppProvider>

      </body>
    </html>
  );
}
