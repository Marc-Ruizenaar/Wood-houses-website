import "./globals.css";

export const metadata = {
  title: "We create the best wooden houses!",
  description: "Discover beautifully crafted wooden houses designed for comfort and durability. Our expert team brings your dream home to life with sustainable materials and exceptional craftsmanship. Experience the warmth and charm of a quality wooden house today!",
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
