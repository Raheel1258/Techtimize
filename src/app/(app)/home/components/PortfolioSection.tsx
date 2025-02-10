import { GET, GET_ALL_PROJECTS_ENDPOINT } from "@/app/api";
import Button from "@/components/Button/Button";
import PortfolioSlider from "@/components/PortfolioSlider/PortfolioSlider";
import Link from "next/link";

interface Service {
  _id: string;
  categoryName: string;
  categoryIcon: string;
  styling?: string;
  isActive: boolean;
  about: string;
}

const PortfolioSection = async () => {
  const response = await GET<Service[]>(GET_ALL_PROJECTS_ENDPOINT);
  if (response.status === "error") {
    throw new Error(response.error);
  }

  const projects: Service[] = response.data;

  return (
    <div>
      <p className="page-blue-heading xl:px-[100px] lg:px-[40px] md:px-[30px] xl:mt-[112px] md:mt-[76px] sm:mt-[76px] mt-[48px] xl:mb-[11px] mb-[5px] sm:px-[25px] px-[20px]">
        Our Work
      </p>
      <h3 className="page-sub-heading xl:px-[100px] lg:px-[40px] md:px-[30px] font-bold xl:mb-[24px] mb-[19px] sm:px-[25px] px-[20px]">
        Our Portfolio
      </h3>
      <div className="xl:pl-[84px] xl:pr-[30px] lg:pl-[30px] lg:pr-[10px] lg:px-0 md:px-[18px] sm:px-[18px]">
        <PortfolioSlider />
      </div>
      <div className="flex items-center justify-center mt-[46px]">
        <Link href={"/projects"}>
          <Button text="View all Projects" textClass="text" />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioSection;
