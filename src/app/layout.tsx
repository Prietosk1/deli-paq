import "@/app/globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
