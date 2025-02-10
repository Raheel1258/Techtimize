import { GET, GET_ALL_WHY_US_ENDPOINT } from "@/app/api";
import Button from "@/components/Button/Button";
import { HiArrowLongRight } from "react-icons/hi2";

interface Service {
  _id: string;
  categoryName: string;
  categoryIcon: string;
  styling?: string;
  isActive: boolean;
  about: string;
}

const WhyUsSection = async () => {
  const response = await GET<Service[]>(GET_ALL_WHY_US_ENDPOINT);
  if (response.status === "error") {
    throw new Error(response.error);
  }

  const whyUsData: Service[] = response.data;

  return (
    <div className="mt-[120px] bg-[#FBFCFF] sm:px-[25px] relative flex flex-col md:justify-center md:items-center sm:pb-[70px] md:pb-[150px]">
      <h3 className="xl:text-[31px] lg:text-[31px] text-[25px] font-bold xl:mb-[54px] lg:mb-[19px] mb-[50px] mt-[30px] sm:text-center  px-[20px] text-black">
        Why Us?
      </h3>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-[10px]">
        <div className="mb-[39px] md:mb-0 px-[20px] sm:px-0">
          <h5 className="lg:text-[20px] text-[19px] mb-[15px] font-semibold text-black">
            Cost Efficiency
          </h5>
          <p className="text xl:w-[390px] text-service">
            Budget-friendly IT solutions aimed at cutting expenses and enhancing
            your financial performance.
          </p>
        </div>
        <div className="mb-[39px] md:mb-0 px-[20px] sm:px-0">
          <h5 className="lg:text-[20px] text-[19px] mb-[15px] font-semibold text-black">
            Pioneering Technology
          </h5>
          <p className="text xl:w-[390px] text-service">
            We remain current with the most recent tech developments, delivering
            inventive solutions that make a difference.
          </p>
        </div>
        <div className="mb-[39px] md:mb-0 px-[20px] sm:px-0">
          <h5 className="lg:text-[20px] text-[19px] mb-[15px] font-semibold text-black">
            Expandability
          </h5>
          <p className="text xl:w-[390px] text-service">
            Our solutions are designed to adapt and expand alongside your
            business, guaranteeing optimal performance.
          </p>
        </div>
      </div>
      <div className="bg-[#0B4D8E] sm:absolute lg:h-[218px] sm:h-[150px] h-[266px] xl:w-[1260px] sm:w-[93%] md:h-[175px] sm:rounded-[10px] flex flex-col justify-center items-center xl:top-[300px] lg:top-[250px] md:top-[300px] sm:top-[270px] xl:px-[79px] lg:p-[30px] p-[16px]">
        <div className="flex lg:flex-row sm:flex-row flex-col justify-between sm:items-center w-full">
          <div className="">
            <h4 className="lg:text-[31px] md:text-[22px] text-[20px] w-full font-bold text-white">
              Expand Your Business Using Techtimize!
            </h4>
            <p className="xl:max-w-[657px] lg:max-w-[600px] md:max-w-[390px] max-w-[300px] text lg:mt-[15px] mt-[14px] mb-[18px] text-white">
              Do you have a business and want to impress your clients with your
              website and digital platform? then we’re ready to help!
            </p>
          </div>
          <Button
            className="bg-white text-black border-0 sm:w-auto w-[53%]"
            text={"Getting Started"}
            textClass="text"
            icon={<HiArrowLongRight size={30} />}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
