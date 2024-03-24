"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const ModelSlider = () => {
  const [emblaRef] = useEmblaCarousel();
  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex lg:gap-[60px] gap-[50px] p-2">
        <div className="min-w-0 flex-grow-0 flex-shrink-0 sm:w-auto w-full">
          <div className="rounded-[10px] drop-shadow-lg bg-white max-w-[630px] h-[172px] md:h-full flex relative">
            <div className="md:basis-[60%] basis-[55%] flex items-center justify-center md:p-[20px] p-[10px]">
              <div>
                <h5 className="xl:text-[25px] lg:text-[22px] md:text-[18px] text-[16px] xl:mb-[15px] mb-[8px]">
                  Hourly Basis
                </h5>
                <p className="text">
                  If you have a short-term project or require a specialized
                  service, consider hiring our skilled developers on an hourly
                  basis.
                </p>
              </div>
            </div>
            <div>
              <Image
                src={"/assets/svgs/model1.svg"}
                alt={"image"}
                width={277}
                height={228}
                className="basis-[40%] sm:pt-[15px] pt-[10px] w-[55%] xl:w-[277px] xl:h-[228px] md:w-[55%] lg:w-[45%] h-full object-cover object-left lg:relative absolute right-0 bottom-0"
              />
            </div>
          </div>
        </div>
        <div className="min-w-0 flex-grow-0 flex-shrink-0 sm:w-auto w-full">
          <div className="rounded-[10px] drop-shadow-lg bg-white max-w-[630px] h-[172px] md:h-full flex relative">
            <div className="md:basis-[60%] basis-[55%] flex items-center justify-center md:p-[20px] p-[10px]">
              <div>
                <h5 className="xl:text-[25px] lg:text-[22px] md:text-[18px] text-[16px] xl:mb-[15px] mb-[8px]">
                  Monthly Basis
                </h5>
                <p className="text">
                  For cost-effective, budget-friendly, time-efficient, and
                  lasting partnerships, consider hiring developers monthly.
                </p>
              </div>
            </div>
            <div>
              <Image
                src={"/assets/svgs/model2.svg"}
                alt={"image"}
                width={277}
                height={228}
                className="basis-[40%] sm:pt-[15px] pt-[10px] w-[65.5%] xl:w-[277px] xl:h-[228px] md:w-[55%] lg:w-[45%] h-full object-cover object-left lg:relative absolute right-0 bottom-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelSlider;
