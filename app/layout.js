import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "XDecoded - A London-based Creative Agency",
  description:
    "Elevate your brand with XDecoded, a London-based creative agency specialising in integrating cutting-edge artificial intelligence with intuitive UX design to create innovative, personalized digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
