import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="flex">
          <Navbar />
          <main className="w-full">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
