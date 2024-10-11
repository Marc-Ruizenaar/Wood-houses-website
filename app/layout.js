import "./globals.css";

export const metadata = {
  title: "Landing Page",
  description: "A landing page for a fake product",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
