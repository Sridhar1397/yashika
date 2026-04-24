import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Yashika Cooking & Catering | Flavour Tells a Story",
  description:
    "Premium Veg & Non-Veg catering services by Yashika Cooking & Catering. Crafted with passion, served with pride. Contact Kiran Gowda at 9731882878.",
  keywords: "catering, veg catering, non-veg catering, event catering, Kiran Gowda, Yashika Catering",
  openGraph: {
    title: "Yashika Cooking & Catering | Flavour Tells a Story",
    description: "Premium Veg & Non-Veg catering services. Crafted with passion, served with pride.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise-overlay">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1A1A1A",
              color: "#F5F0E8",
              border: "1px solid rgba(255,69,0,0.3)",
            },
          }}
        />
      </body>
    </html>
  );
}
