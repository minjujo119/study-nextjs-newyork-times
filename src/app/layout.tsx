import type { Metadata } from "next";
import "../styles/globals.css";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "New York Times Best Sellers Explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="wrap">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
