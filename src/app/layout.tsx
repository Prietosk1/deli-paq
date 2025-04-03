import "@/app/globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-green-200">
        <Navbar />
        <main className="flex-1 overflow-hidden bg-green-100">{children}</main>
      </body>
    </html>
  );
}
