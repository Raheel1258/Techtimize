import React from "react";
import OutlinedButton from "@/components/OutlinedButton";
import Image from "next/image";
import StatCard from "./components/StatCard";
import { stats } from "@/constants/stats";
import FilledButton from "@/components/FilledButton";
import { services } from "@/constants/services";
import ServiceCard from "./components/ServiceCard";
import ProjectLogoSlider from "./components/ProjectLogoSlider";
import PortfolioCard from "@/components/PortfolioCard";
import PortfolioSlider from "@/components/PortfolioSlider/PortfolioSlider";
import TestimonialCard from "@/components/TestimonialCard";
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider";

const Home = () => {
  return (
    <>
      <div className="flex md:justify-between mb-[67px] items-center justify-center md:flex-row sm:flex-row flex-col md:gap-[10px]">
        <div className="xl:ml-[84px] md:ml-[48px] xl:mt-[109px] md:mt-[36px] sm:mt-[36px] mt-[30px]">
          <h1 className="xl:text-[61px] md:text-[42px] sm:text-[42px] text-[31px] font-bold xl:w-[628px] w-[305px] text-[#474747] xl:mb-[12px] mb-[18px] font-Satoshi-Bold">
            Transforming Concepts into Code
          </h1>
          <p className="text-[#8D8D8D] xl:text-[20px] text-[14px] xl:mb-[12px] mb-[18px]">
            Enterprises . Start Ups. Growing Companies
          </p>
          <p className="xl:text-[16px] md:text-[13px] sm:text-[13px] text-[14px] text-[#8D8D8D] xl:w-[628px] w-[343px] xl:mb-[52px] mb-[25px]">
            We cater to all sorts of businesses. We help you harness the power
            of technology to achieve your goals.
          </p>
          <OutlinedButton
            text="Learn More"
            className="xl:w-[184px] xl:h-[61px] w-[123px] h-[41px] md:w-[113px] md:h-[37px] sm:w-[113px] sm:h-[37px] text-[14px] xl:text-[20px]"
          />
        </div>
        <div className="xl:mt-[88px] mt-[59px] xl:mr-[74.53px] md:mr-[18px]">
          <div className="relative">
            <Image
              src={"/images/hero2.png"}
              alt={"hero2"}
              width={130}
              height={130}
              className="absolute xl:top-[-45px] top-[-30px] xl:w-[130px] w-[82.44px] xl:h-[130px] h-[82.44px] md:w-[77.69px] md:h-[77.69px] sm:w-[77.69px] sm:h-[77.69px]"
            />
            <Image
              src={"/images/hero1.png"}
              width={492}
              height={529}
              alt={"hero1"}
              className="xl:w-[492px] xl:h-[529px] md:h-[294.27px] sm:h-[294.27px] md:w-[294.27px] sm:w-[294.27px] w-[312px] h-[312px]"
            />
            <Image
              src={"/images/hero3.png"}
              alt={"hero3"}
              width={130}
              height={130}
              className="absolute xl:bottom-[-30px] bottom-[-15px] xl:w-[130px] w-[82.44px] xl:h-[130px] h-[82.44px] md:w-[77.69px] md:h-[77.69px] sm:w-[77.69px] sm:h-[77.69px]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between xl:px-[98px] md:px-[48px] sm:px-[48px] px-[16px] flex-wrap">
        {stats?.map((item) => {
          return (
            <StatCard key={item?.id} title={item?.title} stat={item?.stat} />
          );
        })}
      </div>
      <div className="pt-20 pb-10">
        <ProjectLogoSlider />
      </div>
      <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col xl:gap-[135px] lg:gap-[135px] justify-between">
        <div className="xl:ml-[75px] md:ml-[47px] sm:ml-[47px] ml-[16px]">
          <p className="text-[#069AD8] text-[16px] xl:mt-[90px] md:mt-[76px] sm:mt-[76px] mt-[48px] xl:mb-[11px] mb-[5px]">
            What do we do?
          </p>
          <h3 className="xl:text-[31px] lg:text-[31px] text-[28px] font-bold xl:mb-[54px] mb-[19px]">
            Our Services
          </h3>
          <p className="xl:text-[16px] lg:text-[16px] md:text-[14px] text-[14px] xl:w-[397px] w-[342px] xl:mb-[70px] md:mb-[42px] mb-[55px]">
            With a focus on innovation, creativity, and reliability, we aim to
            help businesses stay ahead in the ever-evolving digital landscape.
            Our mission is to provide top-notch technology solutions that drive
            growth, maximize ROI, and create a sustainable impact on our
            clients' success.
          </p>
          <FilledButton
            text="Book a Quote"
            className="xl:w-[131px] xl:h-[46px] md:w-[131px] md:h-[44px] sm:w-[131px] sm:h-[44px] w-[103px] h-[37px] xl:text-[16px] md:text-[15px] sm:text-[15px] text-[14px] md:mb-[60.61px]"
          />
        </div>
        <div className="xl:mr-[70px] lg:mr-[70px] md:mr-[46.67px] sm:mr-[46.67px] md:mt-[84px] sm:mt-[84px] xl:mt-[98px] mt-[55px]">
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
        <p className="text-[#069AD8] lg:ml-[54px] md:ml-[42px] text-[16px] xl:mt-[112px] md:mt-[76px] sm:mt-[76px] mt-[48px] xl:mb-[11px] mb-[5px] px-[20px]">
          Our Work
        </p>
        <h3 className="xl:text-[31px] lg:ml-[54px] md:ml-[42px] lg:text-[31px] text-[28px] font-bold xl:mb-[54px] mb-[19px] px-[20px]">
          Our Portfolio
        </h3>
        <div className="lg:ml-[54px] lg:px-0 md:px-[18px]">
          <PortfolioSlider />
        </div>
        <div className="flex items-center justify-center mt-[96px]">
          <FilledButton
            text="View all Projects"
            className="lg:w-[200px] lg:h-[60px] w-[160px] h-[52px] md:w-[157px] md:h-[44px] text-[16px]"
          />
        </div>
      </div>
      <div className="mt-[120px] bg-[#FBFCFF] relative flex flex-col md:justify-center md:items-center">
        <h3 className="xl:text-[31px] lg:text-[31px] text-[25px] font-bold xl:mb-[54px] lg:mb-[19px] mb-[50px] mt-[30px] lg:text-center px-[20px]">
          Why Us?
        </h3>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between lg:px-[149.5px] md:px-[47px] w-full lg:mb-[231px] md:pb-[131px] lg:pb-0 pb-[67px] px-[20px]">
          <div className="mb-[39px] md:mb-0">
            <h5 className="lg:text-[20px] text-[19px] mb-[15px] font-semibold">
              Cost Efficiency
            </h5>
            <p className="lg:w-[266px] md:w-[175px] lg:text-[16px] text-[14px]">
              Budget-friendly IT solutions aimed at cutting expenses and
              enhancing your financial performance.
            </p>
          </div>
          <div className="mb-[39px] md:mb-0">
            <h5 className="lg:text-[20px] text-[19px] mb-[15px] font-semibold">
              Pioneering Technology
            </h5>
            <p className="lg:w-[331.5px] md:w-[197px] lg:text-[16px] text-[14px]">
              We remain current with the most recent tech developments,
              delivering inventive solutions that make a difference.
            </p>
          </div>
          <div className="md:mb-0">
            <h5 className="lg:text-[20px] text-[19px] mb-[15px] font-semibold">
              Expandability
            </h5>
            <p className="lg:w-[331.5px] md:w-[184px] lg:text-[16px] text-[14px]">
              Our solutions are designed to adapt and expand alongside your
              business, guaranteeing optimal performance.
            </p>
          </div>
        </div>
        <div className="bg-[#0B4D8E] md:absolute lg:h-[218px] h-[266px] lg:w-[1260px] md:w-[661px] md:h-[175px] md:rounded-[10px] flex flex-col justify-center items-center lg:top-[364px] md:top-[330px] lg:px-[79px] p-[24px]">
          <div className="flex lg:flex-row md:flex-row flex-col justify-between lg:items-center w-full">
            <div className="">
              <h4 className="lg:text-[31px] md:text-[22px] text-[20px] w-full font-bold text-white">
                Expand Your Business Using Techtimize!
              </h4>
              <p className="lg:w-[657px] md:w-[390px] w-[300px] md:text-[13px] text-[14px] lg:mt-[15px] mt-[14px] mb-[18px] text-white">
                Do you have a business and want to impress your clients with
                your website and digital platform? then we’re ready to help!
              </p>
            </div>
            <button className="bg-white lg:w-[191px] lg:h-[60px] md:w-[131px] md:h-[43px] w-[138.91px] h-[40px] rounded-[7px] text-[14px] md:mt-[47px] lg:mt-0">
              Getting Started
            </button>
          </div>
        </div>
      </div>
      <div className="md:pt-[184px]">
        <p className="text-[#069AD8] text-[16px] mt-[67px] md:mt-0 mb-[3px] mx-[23px] md:mx-[42px]">
          Testimonials
        </p>
        <h5 className="text-[25px] md:text-[28px] font-semibold mb-[42px] mx-[23px] md:mx-[42px]">
          Client Success Stories
        </h5>
        <div className="mb-[99px] md:mb-[118px] md:px-[23px] lg:mb-[144px]">
          <TestimonialSlider />
        </div>
      </div>
    </>
  );
};

export default Home;
