import { useState } from "react";
import type { FormEvent } from "react";
import styles from "./ProjectForm.module.css";

interface ProjectFormProps {
  submitLabel: string;
  onSubmit: (name: string, color: string) => void | Promise<void>;
  onCancel: () => void;
}

const DEFAULT_COLOR = "#1b8c3e";

export default function ProjectForm({
  submitLabel,
  onSubmit,
  onCancel,
}: ProjectFormProps) {
  const [name, setName] = useState("");
  const [color, setColor] = useState(DEFAULT_COLOR);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName) return;
    await onSubmit(trimmedName, color);
    setName("");
    setColor(DEFAULT_COLOR);
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Nom du projet"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
        required
      />
      <input
        type="color"
        aria-label="Couleur du projet"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className={styles.color}
      />
      <button
        type="submit"
        className={styles.submit}
      >
        {submitLabel}
      </button>
      <button
        type="button"
        className={styles.cancel}
        onClick={onCancel}
      >
        Annuler
      </button>
    </form>
  );
}
