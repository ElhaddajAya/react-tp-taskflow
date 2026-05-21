"use client";
import { useActionState } from "react";
import { login } from "../actions/auth";
import type { LoginState } from "../actions/auth.ts";

export default function LoginPage() {
  // useActionState avec React 19 utilise la signature (state, payload) => state
  // login = la Server Action à appeler
  // null = état initial (pas d'erreur)
  // state = résultat retourné par login() (ex: { error: "..." })
  // formAction = à passer dans action={} du form
  // pending = true pendant l'exécution de la Server Action
  const [state, formAction, pending] = useActionState<LoginState, FormData>(
    login,
    null,
  );

  return (
    <div style={{ padding: "2rem", maxWidth: 400, margin: "0 auto" }}>
      <h1 style={{ color: "#1B8C3E" }}>TaskFlow</h1>
      <p>Connectez-vous pour continuer</p>

      {/* Afficher l'erreur si elle existe dans le state */}
      {state?.error && <p style={{ color: "red" }}>{state.error}</p>}

      {/* form action={formAction} — pas besoin de onSubmit ni de e.preventDefault() */}
      <form
        action={formAction}
        style={{ display: "flex", flexDirection: "column", gap: 12 }}
      >
        <input
          name='email'
          type='email'
          placeholder='Email'
          required
          style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <input
          name='password'
          type='password'
          placeholder='Mot de passe'
          required
          style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <button
          type='submit'
          disabled={pending}
          style={{
            padding: 10,
            background: "#1B8C3E",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          {pending ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
}
