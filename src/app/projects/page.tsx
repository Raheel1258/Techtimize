import Button from "@/components/Button/Button";
import PageHeader from "@/components/PageHeader/PageHeader";
import { projectsData } from "@/constants/portfolioData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div>
      <PageHeader subHeading="Projects" heading="Our Portfolio" />
      <div className="flex flex-col gap-[30px] p-[5%] bg-white">
        {projectsData.map((project) => {
          return (
            <Link key={project.id} href={`/projects/${project.id}`} className="drop-shadow-xl">
              <div
                
                className={`flex rounded-[10px]`}
                style={{ backgroundColor: project.bg }}
              >
                <div className="basis-[70%] flex flex-col justify-center p-[3%]">
                  <p className="mb-[25px]">{project.title}</p>
                  <p className="xl:text-[16px] text-[12px] text-tertiary mb-[40px]">
                    {project?.description}
                  </p>
                  <div className="flex sm:flex-row flex-col sm:items-center items-start xl:gap-[40px] gap-[20px]">
                    <div className="flex items-center flex-wrap xl:gap-[20px] gap-[10px]">
                      {project?.technologies?.map((item) => {
                        return (
                          <Image
                            key={item.id}
                            src={item?.image}
                            alt={"image"}
                            width={46}
                            height={46}
                            className="w-[26px] h-[26px] xl:w-[46px] xl:h-[46px]"
                          />
                        );
                      })}
                    </div>
                    <Button text="View Project" textClass="text" />
                  </div>
                </div>
                <div className="sm:basis-[30%] basis-[40%]">
                  <Image
                    src={project?.imageDesktop}
                    alt={"project image"}
                    width={552}
                    height={358}
                    className="h-[358px] hidden xl:flex"
                  />
                  <Image
                    src={project?.imageTablet}
                    alt={"project image"}
                    width={552}
                    height={358}
                    className="hidden sm:flex xl:hidden w-full h-full"
                  />
                  <Image
                    src={project?.imageMobile}
                    alt={"project image"}
                    width={552}
                    height={358}
                    className="flex sm:hidden w-full h-full"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
