import React, { ReactNode } from "react";

interface PageHeaderProps {
  heading: string;
  subHeading: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ heading, subHeading }) => {
  return (
    <div className="h-[319px] bg-[#FBFCFF] flex items-center justify-center">
      <div>
        <p className="text-center text-[16px] text-[#727272] mb-[5px]">
          Home {">"}
          {">"} <span className="text-[#069AD8]">{subHeading}</span>
        </p>
        <h1 className="page-heading">{heading}</h1>
      </div>
    </div>
  );
};

export default PageHeader;