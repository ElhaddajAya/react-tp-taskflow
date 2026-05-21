import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/projects — lire depuis la BDD au lieu de db.json
export async function GET() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(projects);
}

// POST /api/projects — créer dans la BDD
export async function POST(request: Request) {
  const { name, color } = await request.json();
  const project = await prisma.project.create({
    data: { name, color },
  });
  return NextResponse.json(project, { status: 201 });
}
