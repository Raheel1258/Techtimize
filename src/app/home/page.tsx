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
      <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col xl:gap-[135px] lg:gap-[135px] justify-between xl:mb-[217px]">
        <div className="xl:ml-[75px] md:ml-[47px] sm:ml-[47px] ml-[16px]">
          <p className="text-[#069AD8] text-[16px] xl:mt-[112px] md:mt-[76px] sm:mt-[76px] mt-[48px] xl:mb-[11px] mb-[5px]">
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
            className="xl:w-[131px] xl:h-[46px] md:w-[131px] md:h-[44px] sm:w-[131px] sm:h-[44px] w-[103px] h-[37px] xl:text-[16px] md:text-[15px] sm:text-[15px] text-[14px]"
          />
        </div>
        <div className="xl:mr-[70px] lg:mr-[70px] md:mr-[46.67px] sm:mr-[46.67px] md:mt-[84px] sm:mt-[84px] xl:mt-[98px] mt-[55px]">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-2 xl:gap-[26px] md:gap-[12px] sm:gap-[12px] gap-[15px] md:px-0 px-[16px]">
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
      <div className="pl-[54px]">
        <p className="text-[#069AD8] text-[16px] xl:mt-[112px] md:mt-[76px] sm:mt-[76px] mt-[48px] xl:mb-[11px] mb-[5px]">
          Our Work
        </p>
        <h3 className="xl:text-[31px] lg:text-[31px] text-[28px] font-bold xl:mb-[54px] mb-[19px]">
          Our Portfolio
        </h3>
        <PortfolioSlider />
      </div>
    </>
  );
};

export default Home;
