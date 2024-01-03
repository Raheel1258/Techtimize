"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const ProjectLogoSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="flex items-center xl:w-[251px] xl:h-[89px] lg:w-[251px] lg:h-[89px]">
          <Image
            src={"/images/salesMind.png"}
            alt={"sales mind"}
            width={89}
            height={89}
          />
          <p className="xl:text-[25px] lg:text-[25px] font-bold">Sales Mind</p>
        </div>
      </div>
      <div>
        <div>
          <Image
            src={"/images/sunndio.png"}
            alt={"sunndio"}
            width={201}
            height={90}
          />
        </div>
      </div>
      <div>
        <div>
          <Image
            src={"/images/check.png"}
            alt={"check ai"}
            width={200}
            height={104}
          />
        </div>
      </div>
      <div>
        <div className="flex xl:gap-[21px] lg:gap-[21px] items-center xl:w-[251px] xl:h-[89px] lg:w-[251px] lg:h-[89px]">
          <Image
            src={"/images/bitcoin.png"}
            alt={"bitcoin"}
            width={63}
            height={63}
          />
          <p className="xl:text-[25px] lg:text-[25px] font-bold">
            Bitcoin tribe
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center xl:w-[251px] xl:h-[89px] lg:w-[251px] lg:h-[89px]">
          <Image
            src={"/images/senSights.png"}
            alt={"sen sights"}
            width={239}
            height={59}
          />
        </div>
      </div>
    </Slider>
  );
};

export default ProjectLogoSlider;
