import PageHeader from "@/components/PageHeader/PageHeader";
import ProjectsList from "./components/ProjectsList";
import { GET, GET_ALL_PROJECTS_ENDPOINT } from "@/app/api";

interface Service {
  _id: string;
  categoryName: string;
  categoryIcon: string;
  styling?: string;
  isActive: boolean;
  about: string;
}

const Projects = async () => {
  const response = await GET<Service[]>(GET_ALL_PROJECTS_ENDPOINT);
  console.log("All Projects: ", response);
  if (response.status === "error") {
    throw new Error(response.error);
  }

  const projects: Service[] = response.data;

  return (
    <div>
      <PageHeader subHeading="Projects" heading="Our Portfolio" />
      <ProjectsList />
    </div>
  );
};

export default Projects;
