"use server";

import { redirect } from "next/navigation";

export type LoginState = { error: string } | null;

export async function login(
  state: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email et mot de passe sont requis." };
  }

  // Exemple simple d'authentification côté serveur.
  // Remplacez cette logique par un appel réel à une API ou un service d'authentification.
  if (email !== "admin@example.com" || password !== "password") {
    return { error: "Email ou mot de passe incorrect." };
  }

  redirect("/dashboard");
}

export async function logoutAction() {
  // Pour un vrai projet, révoquez le cookie/session côté serveur ici.
  redirect("/login");
}
