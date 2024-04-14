import Button from "@/components/Button/Button";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Projects = () => {
  return (
    <div className="page-pt">
      <PageHeader subHeading="Projects" heading="Our Portfolio" />
      <div className="border xl:p-8 p-[20px]">
        <div className="border rounded-[10px] flex items-center w-full">
          <div className="xl:p-[20px] p-[10px] xl:basis-[70%] basis-[50%] w-full">
            <div className="mb-[15px]">Logo</div>
            <p className="text mb-[30px]">
              Unlock your full sales potential with powerful techniques like
              affirmations and goal visualization. Revolutionize your sales
              approach and boost your confidence daily for rapid improvements.
            </p>
            <div className="flex sm:flex-row flex-col items-center gap-[10px] xl:gap-5">
              <div className="flex items-center xl:gap-5 gap-[10px]">
                Technologies
              </div>
              <Button
                text="View Project"
                className="p-[10px] bg-primaryBlue text-white rounded-[7px]"
                textClass="text"
              />
            </div>
          </div>
          <div className="relative flex justify-end  h-full w-full xl:basis-[30%]">
            <div className="border rounded-s-full w-[45%] h-[200px]">Hello</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
