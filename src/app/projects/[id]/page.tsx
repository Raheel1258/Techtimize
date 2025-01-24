import { generateMetadataFromBE } from "@/lib/utils";
import type { Metadata } from "next";
import ProjectDetails from "../components/ProjectDetails";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return await generateMetadataFromBE(`projects/${params.id}`);
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  return <ProjectDetails params={params} />;
}