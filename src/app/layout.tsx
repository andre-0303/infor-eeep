import "./globals.css";
import Navbar from '../components/navbar/page';
import Footer from '../components/footer/page';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
