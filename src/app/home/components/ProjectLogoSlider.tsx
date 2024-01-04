"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ProjectLogoSlider extends Component {
  componentDidMount() {
    // You can customize the initialization here if needed
    // For example, you can log something to check if this block is executed
    console.log("Slider initialized");
  }

  render() {
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
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Slider {...settings}>
        <div>
          <div className="flex items-center justify-center xl:w-[251px] xl:h-[89px] lg:w-[251px] lg:h-[89px] md:w-[251px] md:h-[89px] w-[136px] h-[48.89px] border">
            <Image
              src={"/images/salesMind.png"}
              alt={"sales mind"}
              width={89}
              height={89}
              className="lg:w-[89px] lg:h-[89px] md:w-[89px] md:h-[89px] w-[43.56px] h-[43.56px]"
            />
            <p className="xl:text-[25px] lg:text-[25px] md:text-[25px] font-bold">
              Sales Mind
            </p>
          </div>
        </div>
        <div>
          <div className="border flex items-center justify-center w-[110px] h-[49px] lg:w-[201px] lg:h-[90px] md:w-[251px] md:h-[89px]">
            <Image
              src={"/images/sunndio.png"}
              alt={"sunndio"}
              width={201}
              height={90}
              className="w-[110px] h-[49px] lg:w-[201px] lg:h-[90px] md:w-[201px] md:h-[90px]"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center border lg:w-[200px] lg:h-[104px] md:w-[251px] md:h-[89px] h-[49px] w-[100px]">
            <Image
              src={"/images/check.png"}
              alt={"check ai"}
              width={200}
              height={104}
              className="lg:w-[200px] lg:h-[104px] md:h-[89px] md:w-[170px] h-[49px] w-[100px]"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center xl:gap-[21px] lg:gap-[21px] gap-[10px] xl:w-[251px] xl:h-[89px] lg:w-[251px] lg:h-[89px] md:w-[251px] md:h-[89px] w-[156px] h-[49px] border">
            <Image
              src={"/images/bitcoin.png"}
              alt={"bitcoin"}
              width={63}
              height={63}
              className="lg:w-[63px] lg:h-[63px] md:w-[63px] md:h-[63px] w-[40px] h-[40px]"
            />
            <p className="xl:text-[25px] lg:text-[25px] md:text-[25px] font-bold">
              Bitcoin tribe
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center xl:w-[251px] xl:h-[89px] lg:w-[251px] lg:h-[89px] md:w-[251px] md:h-[89px] border">
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
  }
}

export default ProjectLogoSlider;
