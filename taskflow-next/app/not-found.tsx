import Image from "next/image";

export default function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", color: "#ccc" }}>404</h1>
      <p>Cette page n'existe pas</p>
      <a
        href='/dashboard'
        style={{ color: "#1B8C3E" }}
      >
        ← Retour au Dashboard
      </a>
    </div>
  );
}
