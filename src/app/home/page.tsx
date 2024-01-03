import React from "react";
import OutlinedButton from "@/components/OutlinedButton";
import Image from "next/image";
import StatCard from "./components/StatCard";

const Home = () => {
  const stats = [
    {
      id: 0,
      title: "Our Global Clients",
      stat: "100 +",
    },
    {
      id: 1,
      title: "Projects Delivered",
      stat: "100 +",
    },
    {
      id: 2,
      title: "Total Countries",
      stat: "5 +",
    },
    {
      id: 3,
      title: "Our Success Rate",
      stat: "99%",
    },
  ];
  return (
    <>
      <div className="flex md:justify-between mb-[67px] items-center justify-center md:flex-row flex-col">
        <div className="xl:ml-[84px] md:ml-[48px] xl:mt-[109px] mt-[30px]">
          <h1 className="xl:text-[61px] md:text-[42px] text-[31px] font-bold xl:w-[628px] w-[305px] text-[#474747] xl:mb-[12px] mb-[18px] font-Satoshi-Bold">
            Transforming Concepts into Code
          </h1>
          <p className="text-[#8D8D8D] xl:text-[20px] text-[14px] xl:mb-[12px] mb-[18px]">
            Enterprises . Start Ups. Growing Companies
          </p>
          <p className="xl:text-[16px] text-[14px] text-[#8D8D8D] xl:w-[628px] w-[343px] xl:mb-[52px] mb-[25px]">
            We cater to all sorts of businesses. We help you harness the power
            of technology to achieve your goals.
          </p>
          <OutlinedButton
            text="Learn More"
            className="xl:w-[184px] xl:h-[61px] w-[123px] h-[41px] md:w-[113px] md:h-[37px] text-[14px] xl:text-[20px]"
          />
        </div>
        <div className="xl:mt-[88px] mt-[59px] xl:mr-[74.53px] md:mr-[18px]">
          <div className="relative">
            <Image
              src={"/images/hero2.png"}
              alt={"hero2"}
              width={130}
              height={130}
              className="absolute xl:top-[-45px] top-[-30px] xl:w-[130px] w-[82.44px] xl:h-[130px] h-[82.44px]"
            />
            <Image
              src={"/images/hero1.png"}
              width={492}
              height={529}
              alt={"hero1"}
              className="xl:w-[492px] xl:h-[529px] w-[312px] h-[312px]"
            />
            <Image
              src={"/images/hero3.png"}
              alt={"hero3"}
              width={130}
              height={130}
              className="absolute xl:bottom-[-30px] bottom-[-15px] xl:w-[130px] w-[82.44px] xl:h-[130px] h-[82.44px]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between xl:px-[98px] px-[16px] flex-wrap">
        {stats?.map((item) => {
          return (
            <StatCard key={item?.id} title={item?.title} stat={item?.stat} />
          );
        })}
      </div>
    </>
  );
};

export default Home;
