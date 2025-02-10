import { GET, GET_ALL_PROJECTS_ENDPOINT } from "@/app/api";
import ProjectLogoSlider from "./ProjectLogoSlider";

interface Service {
  _id: string;
  categoryName: string;
  categoryIcon: string;
  styling?: string;
  isActive: boolean;
  about: string;
}

const ProjectsSection = async () => {
  const response = await GET<Service[]>(GET_ALL_PROJECTS_ENDPOINT);
  if (response.status === "error") {
    throw new Error(response.error);
  }

  const projects: Service[] = response.data;
  return (
    <div className="pt-20 pb-10">
      <ProjectLogoSlider />
    </div>
  );
};

export default ProjectsSection;
