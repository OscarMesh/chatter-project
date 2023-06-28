import "./globals.css";
import { DM_Sans } from "next/font/google";
import ToasterProvider from "@/providers/ToasterProvider";
import AuthProvider from "@/providers/AuthProvider";

const dm_sans = DM_Sans({
  subsets: ["latin-ext"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-dmsans",
});

export const metadata = {
  title: "Chatter Application",
  description: "A chat Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dm_sans.variable}>
      <body className="font-DM_SANS">
        <AuthProvider>
          <ToasterProvider />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
