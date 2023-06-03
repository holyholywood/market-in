import DownloadAppTop from "./components/molecules/DownloadAppTop";
import Navbar from "./components/organisms/Navbar";
import "./globals.css";

export const metadata = {
  title: "Market-In Your Trusted Marketplace",
  description: "Your trusted market place in Indonesia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div className="sticky top-0 z-20">
          <DownloadAppTop />
          <Navbar />
        </div>
        <main className="w-full pt-5">
          <div className=" w-full max-w-5xl mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
