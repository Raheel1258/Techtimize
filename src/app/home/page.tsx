import React from "react";
import Image from "next/image";
import StatCard from "./components/StatCard";
import { stats } from "@/constants/stats";
import Button from "@/components/Button/Button";
import { services } from "@/constants/services";
import ServiceCard from "./components/ServiceCard";
import ProjectLogoSlider from "./components/ProjectLogoSlider";
import PortfolioSlider from "@/components/PortfolioSlider/PortfolioSlider";
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider";
import { HiArrowLongRight } from "react-icons/hi2";

const Home = () => {
  return (
    <div>
      <div className="flex md:justify-between my-[45px] sm:my-0 sm:mb-[45px] md:mt-[45px] sm:justify-between justify-center md:flex-row sm:flex-row flex-col md:gap-[10px] sm:px-[25px] md:px-[30px] lg:px-[40px] px-[16px]">
        <div className="xl:ml-[64px] md:mt-[36px] sm:mt-[36px]">
          <h1 className="md:text-[42px] sm:text-[42px] text-[31px] font-bold xl:max-w-[428px] max-w-[305px] text-[#474747] xl:mb-[12px] mb-[18px] font-Satoshi-Bold">
            Transforming Concepts into Code
          </h1>
          <p className="text-[#8D8D8D] xl:text-[18px] text-[14px] xl:mb-[12px] mb-[18px]">
            Enterprises . Start Ups. Growing Companies
          </p>
          <p className="text text-[#8D8D8D] xl:max-w-[628px] max-w-[300px] xl:mb-[32px] mb-[25px]">
            We cater to all sorts of businesses. We help you harness the power
            of technology to achieve your goals.
          </p>
          <Button text="Learn More" textClass="text" variant="outlined" />
        </div>
        <div className="xl:mr-[74.53px] mt-[50px] md:mt-0">
          <div className="flex items-center justify-center">
            <div className="relative">
              <Image
                src={"/images/hero2.png"}
                alt={"hero2"}
                width={130}
                height={130}
                className="absolute xl:top-[-30px] top-[-30px] xl:w-[100px] w-[82.44px] lg:w-[105px] lg:h-[105px] xl:h-[100px] h-[82.44px] md:w-[100px] md:h-[100px] sm:w-[85px] sm:h-[85px]"
              />
              <Image
                src={"/images/hero1.png"}
                width={492}
                height={529}
                alt={"hero1"}
                className="lg:w-[395px] lg:h-[425px] md:h-[390px] sm:h-[320px] md:w-[370px] sm:w-[320px] w-[312px] h-[312px]"
              />
              <Image
                src={"/images/hero3.png"}
                alt={"hero3"}
                width={130}
                height={130}
                className="absolute xl:bottom-[-10px] bottom-[-15px] xl:w-[100px] lg:w-[105px] lg:h-[105px] w-[82.44px] xl:h-[100px] h-[82.44px] md:w-[100px] md:h-[100px] sm:w-[85px] sm:h-[85px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 xl:gap-[60px] gap-[15px] xl:px-[98px] sm:px-[25px] md:px-[30px] lg:px-[40px] px-[16px]">
        {stats?.map((item) => {
          return (
            <StatCard key={item?.id} title={item?.title} stat={item?.stat} />
          );
        })}
      </div>
      <div className="pt-20 pb-10">
        <ProjectLogoSlider />
      </div>
      <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col xl:gap-[135px] lg:gap-[135px] justify-between bg-[#FBFCFF]">
        <div className="xl:ml-[63px] sm:pl-[25px] md:pl-[30px] lg:pl-[40px] sm:pr-0 px-[16px]">
          <p className="page-blue-heading xl:mt-[90px] md:mt-[76px] sm:mt-[76px] mt-[48px] xl:mb-[11px] mb-[5px]">
            What do we do?
          </p>
          <h3 className="page-sub-heading font-bold xl:mb-[54px] mb-[19px]">
            Our Services
          </h3>
          <p className="text xl:max-w-[397px] max-w-[342px] xl:mb-[70px] md:mb-[42px] mb-[55px]">
            With a focus on innovation, creativity, and reliability, we aim to
            help businesses stay ahead in the ever-evolving digital landscape.
            Our mission is to provide top-notch technology solutions that drive
            growth, maximize ROI, and create a sustainable impact on our
            clients' success.
          </p>
          <Button
            textClass="text"
            text="Book a Quote"
            className="xl:w-[131px] xl:h-[46px] md:w-[131px] md:h-[44px] sm:w-[131px] sm:h-[44px] w-[103px] h-[37px] md:mb-[60.61px] bg-[#0697D5] rounded-[7px] text-white"
          />
        </div>
        <div className="xl:mr-[70px] sm:pr-[20px] md:pr-[25px] lg:pr-[30px] md:mt-[84px] sm:mt-[84px] xl:mt-[98px] mt-[55px]">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-2 xl:gap-[26px] md:gap-[12px] sm:gap-[12px] gap-[15px] md:px-0 px-[16px] pb-[60.61px]">
            {services?.map((item) => {
              return (
                <ServiceCard
                  text={item?.title}
                  image={item?.image}
                  key={item?.id}
                  imgClass={item?.styling}
                />
              );
            })}
          </div>
        </div>
      </div>
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
          <Button
            text="View all Projects"
            textClass="text"
            className="lg:w-[200px] lg:h-[60px] w-[160px] h-[52px] md:w-[157px] md:h-[44px] text-[16px] bg-[#0697D5] text-white rounded-[10px]"
          />
        </div>
      </div>
      <div className="mt-[120px] bg-[#FBFCFF] sm:px-[25px] relative flex flex-col md:justify-center md:items-center sm:pb-[70px] md:pb-[150px]">
        <h3 className="xl:text-[31px] lg:text-[31px] text-[25px] font-bold xl:mb-[54px] lg:mb-[19px] mb-[50px] mt-[30px] sm:text-center  px-[20px]">
          Why Us?
        </h3>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-[10px]">
          <div className="mb-[39px] md:mb-0 px-[20px] sm:px-0">
            <h5 className="lg:text-[20px] text-[19px] mb-[15px] font-semibold">
              Cost Efficiency
            </h5>
            <p className="text xl:w-[390px]">
              Budget-friendly IT solutions aimed at cutting expenses and
              enhancing your financial performance.
            </p>
          </div>
          <div className="mb-[39px] md:mb-0 px-[20px] sm:px-0">
            <h5 className="lg:text-[20px] text-[19px] mb-[15px] font-semibold">
              Pioneering Technology
            </h5>
            <p className="text xl:w-[390px]">
              We remain current with the most recent tech developments,
              delivering inventive solutions that make a difference.
            </p>
          </div>
          <div className="mb-[39px] md:mb-0 px-[20px] sm:px-0">
            <h5 className="lg:text-[20px] text-[19px] mb-[15px] font-semibold">
              Expandability
            </h5>
            <p className="text xl:w-[390px]">
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
                Do you have a business and want to impress your clients with
                your website and digital platform? then we’re ready to help!
              </p>
            </div>
            <Button
              className="bg-white text-black border-0"
              text={"Getting Started"}
              textClass="text"
              icon={<HiArrowLongRight size={30} />}
            />
          </div>
        </div>
      </div>
      <div className="md:pt-[60px] sm:mt-[150px]">
        <p className="page-blue-heading mt-[67px] md:mt-0 mb-[3px] sm:px-[25px] px-[23px] md:px-[30px] lg:px-[40px] xl:px-[100px]">
          Testimonials
        </p>
        <h5 className="page-sub-heading font-semibold mb-[42px] px-[23px] sm:px-[25px] md:px-[30px] lg:px-[40px] xl:px-[100px]">
          Client Success Stories
        </h5>
        <div className="mb-[99px] md:mb-[118px] md:pl-[30px] md:pr-[20px] xl:pl-[100px] xl:pr-[30px] sm:pl-[20px] sm:pr-[10px] lg:mb-[144px]">
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Home;
