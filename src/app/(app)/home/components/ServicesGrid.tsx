import ServiceCard from "./ServiceCard";
import { GET } from "@/app/api";
import { GET_ALL_SERVICES_ENDPOINT } from "@/app/api";

interface Service {
  _id: string;
  categoryName: string;
  categoryIcon: string;
  styling?: string;
  isActive: boolean;
  about: string;
}

const ServicesGrid = async () => {
  const response = await GET<Service[]>(GET_ALL_SERVICES_ENDPOINT);

  if (response.status === "error") {
    throw new Error(response.error);
  }

  const services: Service[] = response.data;

  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-2 xl:gap-[26px] md:gap-[12px] sm:gap-[12px] gap-[15px] md:px-0 px-[16px] pb-[60.61px]">
      {services.map((item) => (
        <ServiceCard
          text={item.categoryName}
          image={item.categoryIcon}
          key={item._id}
          imgClass={item.styling}
        />
      ))}
    </div>
  );
};

export default ServicesGrid;
