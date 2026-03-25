import "./globals.css";
import PointerField from "../components/PointerField";

export const metadata = {
  title: "Hydrabotz Technologies",
  description: "Hydrabotz Technologies STEM education and robotics training website.",
  icons: {
    icon: "/assets/logo.jpeg",
    shortcut: "/assets/logo.jpeg",
    apple: "/assets/logo.jpeg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PointerField />
        {children}
      </body>
    </html>
  );
}
