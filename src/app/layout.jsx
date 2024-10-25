import "./globals.css";

export const metadata = {
  title: "Mark Saado - Full stack web developer",
  description:
    "Mark Saado - Full Stack Web Developer met ervaring in React, Next.js en Django. Bekijk mijn projecten en live websites om meer te zien van mijn werk en vaardigheden in front-end en back-end ontwikkeling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
