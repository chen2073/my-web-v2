import type { Metadata } from "next";
import Link from 'next/link';
import "./globals.css";

export const metadata: Metadata = {
  title: "Hao Chen",
  description: "About me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-100">
      <header className="bg-transparent">
        <nav className="pt-10 px-20 flex justify-between">
          <div><Link href="/"><h1 className="text-xl font-bold">Hao Chen(James)</h1></Link></div>
          <div className="flex justify-end">
            <div className="mx-4"><Link href="/experience"><h1 className="text-l">Experience</h1></Link></div>
            <div className="mx-4"><Link href="/projects"><h1 className="text-l">Projects</h1></Link></div>
            <div className="mx-4"><Link href="/contact"><h1 className="text-l">Contact</h1></Link></div>
          </div>
        </nav>
      </header>
        {children}
      <footer className="bg-transparent shadow">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 By Hao Chen. All Rights Reserved.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500">
              <li>
                  <a href="/" className="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                  <a href="/contact" className="hover:underline">Contact</a>
              </li>
          </ul>
        </div>
      </footer>
      </body>
    </html>
  );
}
