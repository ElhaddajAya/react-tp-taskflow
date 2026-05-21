// Bouton déconnexion — Client Component car il utilise une Server Action dans un form
"use client";
import { logoutAction } from "../actions/auth";

export default function LogoutButton() {
  return (
    // On utilise un form + action pour appeler la Server Action
    <form action={logoutAction}>
      <button
        type="submit"
        style={{
          background: "none",
          border: "1px solid white",
          color: "white",
          padding: "4px 12px",
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        Déconnexion
      </button>
    </form>
  );
}