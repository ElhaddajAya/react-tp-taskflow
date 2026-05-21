import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import LogoutButton from "./components/LogoutButton";

// Next.js télécharge la police au build et la sert localement — zéro requête externe
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskFlow",
  description: "Gestion de projets collaboratifs",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Lire le cookie de session côté serveur
  const cookieStore = await cookies();
  const session = cookieStore.get("session");
  const user = session ? JSON.parse(session.value) : null;

  return (
    <html lang='fr'>
      {/* inter.className applique la police à toute l'app */}
      <body className={inter.className}>
        <header
          style={{
            background: "#1B8C3E",
            color: "white",
            padding: "1rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0, fontWeight: 700 }}>TaskFlow</h2>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {user && <span>{user.name}</span>}
            {user && <LogoutButton />}
            {!user && (
              <a
                href='/login'
                style={{ color: "white" }}
              >
                Login
              </a>
            )}
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
