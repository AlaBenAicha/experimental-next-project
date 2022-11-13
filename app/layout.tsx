import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div style={{ height: "60px", backgroundColor: "gray" }}>
          <ul
            style={{
              display: "flex",
              width: "20%",
              justifyContent: "space-around",
              paddingTop: "10px",
            }}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/page">Page</Link>
            </li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  );
}
