import type { Metadata } from "next";
import "@/src/styles/_globals.scss";
import Nav from "@/src/components/Nav";

export const metadata: Metadata = {
  title: {
    template: "%s | NYT BestSeller",
    default: "NY Times BestSeller",
  },
  description: "NY Times BestSeller Explorer",
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
