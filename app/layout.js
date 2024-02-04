import "@styles/globals.css";
import Nav from "@components/Nav";
export const metadata = {
  title: "Postepea",
  description: "Discover new world of posts and aticls",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
