import "./globals.css";

export const metadata = {
  title: "MakeWeWork",
  description:
    "MakeWeWork is a platform that aims to bridge the gap between unexperienced techies and their first job.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
