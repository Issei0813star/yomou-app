import Header from "@/components/Header/Header";
import "./layout.scss";
import "../styles/_globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
