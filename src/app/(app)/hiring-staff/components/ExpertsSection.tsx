import { expertiseData } from "@/constants/expertise-data";
import ExpertiseCard from "./ExpertiseCard";
import { GET, GET_ALL_EXPERTS_ENDPOINT } from "@/app/api";

interface Service {
  _id: string;
  categoryName: string;
  categoryIcon: string;
  styling?: string;
  isActive: boolean;
  about: string;
}

const ExpertsSection = async () => {
  const response = await GET<Service[]>(GET_ALL_EXPERTS_ENDPOINT);
  if (response.status === "error") {
    throw new Error(response.error);
  }

  const experts: Service[] = response.data;

  return (
    <div className="bg-[#FBFCFF] page-px py-[40px]">
      <p className="page-blue-heading xl:mb-[11px] mb-[5px]">Our Top Talent</p>
      <h4 className="page-sub-heading font-semibold xl:mb-[27px] mb-[19px]">
        Select Expertise
      </h4>
      <div className="py-[20px] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[60px] sm:gap-[30px] gap-[60px]">
        {expertiseData?.map((item, index: number) => {
          return <ExpertiseCard data={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ExpertsSection;
