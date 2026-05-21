import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Le middleware s'exécute AVANT que Next.js génère le HTML
// C'est l'équivalent de PrivateRoute en React, mais côté serveur
// Avantage : aucun flash de contenu — la page ne se charge même pas si pas connecté
export function middleware(request: NextRequest) {
  // Lire le cookie de session depuis la requête
  const session = request.cookies.get("session");

  // Si pas de cookie → rediriger vers /login
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Cookie présent → laisser passer la requête normalement
  return NextResponse.next();
}

// Définir quelles routes sont protégées par ce middleware
export const config = {
  matcher: ["/dashboard/:path*", "/projects/:path*"],
};
