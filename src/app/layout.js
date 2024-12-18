import localFont from "next/font/local";
// import {Doto} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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

// const doto = Doto({
//   subsets: ['latin'],
//   weight: ["100", "400", "700"]
// })

export const metadata = {
  title: {
    default: "Next SupHero",
    template: '%s | Next Hero'
  },
  description: "A powerful nextJS web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        <div className="">
        {children}
        </div>
        <footer className=" p-12 text-center bg-yellow-700">
          This is the footer of my Next app
        </footer>
      </body>
    </html>
  );
}
