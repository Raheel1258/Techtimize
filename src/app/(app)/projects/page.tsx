import Button from "@/components/Button/Button";
import PageHeader from "@/components/PageHeader/PageHeader";
import { projectsData } from "@/constants/portfolioData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectsList from "./components/ProjectsList";

const Projects = () => {
  return (
    <div>
      <PageHeader subHeading="Projects" heading="Our Portfolio" />
      <ProjectsList />
    </div>
  );
};

export default Projects;
