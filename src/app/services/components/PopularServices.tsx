"use client";
import { serviceCardInfo, serviceOptions } from "@/constants/services";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

const PopularServices = () => {
  const [selectedService, setSelectedService] = useState<any>("");

  useEffect(() => {
    const defaultService = serviceCardInfo.find(
      (service) => service.serviceName === "App Development"
    );
    setSelectedService(defaultService);
  }, []);

  const handleServiceSelect = (serviceText: string) => {
    const selectedServiceInfo = serviceCardInfo.find(
      (service) => service.serviceName === serviceText
    );
    setSelectedService(selectedServiceInfo);
  };

  return (
    <div className="w-full">
      <ul className="flex flex-nowrap items-center sm:justify-center lg:justify-between gap-3 sm:gap-6 overflow-hidden overflow-x-auto w-full scrollbar-hide px-[20px] text">
        {serviceOptions?.map((service) => {
          return (
            <li
              key={service?.id}
              className={`whitespace-nowrap sm:w-auto cursor-pointer satoshi-medium ${
                selectedService?.serviceName === service.text
                  ? "text-primary"
                  : "text-black"
              }`}
              onClick={() => handleServiceSelect(service.text)}
            >
              {service?.text}
            </li>
          );
        })}
      </ul>
      <div className="w-full flex justify-center my-[30px]">
        <div className="h-[3px] rounded-full sm:w-[80%] w-[95%] bg-white drop-shadow-lg" />
      </div>
      <p className="text mb-[30px] text-black">
        We're your dedicated partner in web and mobile app development,
        specializing in creating bespoke solutions that bring your unique vision
        to life. With a focus on user-centric design, scalability, and robust
        functionality, we're here to empower your online presence and drive your
        success.
      </p>
      <h5 className="mb-[20px] text-[22px] text-black">What we Offer</h5>
      <div className="flex flex-nowrap gap-[50px] overflow-x-auto scrollbar-hide max-w-full">
        {selectedService && (
          <>
            {selectedService?.services?.map((service: Service) => (
              <div
                key={service.id}
                className="flex-none flex-shrink-0 w-full xl:w-1/4 sm:w-[35%]"
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service?.image}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default PopularServices;
