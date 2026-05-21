"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

// Ajouter un projet directement dans la BDD
export async function addProject(formData: FormData) {
  const name = formData.get("name") as string;
  const color = formData.get("color") as string;
  await prisma.project.create({ data: { name, color } });
  revalidatePath("/dashboard");
}

// Renommer un projet
export async function renameProject(formData: FormData) {
  const id = Number(formData.get("id"));
  const newName = formData.get("newName") as string;
  const color = formData.get("color") as string;
  await prisma.project.update({
    where: { id },
    data: { name: newName, color },
  });
  revalidatePath("/dashboard");
}

// Supprimer un projet
export async function deleteProject(formData: FormData) {
  const id = Number(formData.get("id"));
  await prisma.project.delete({ where: { id } });
  revalidatePath("/dashboard");
}
