import Image from "next/image";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8F8F8]">
      <div className="flex lg:flex-row md:flex-row flex-col xl:gap-[93px] lg:gap-[40px] md:gap-[35px] xl:h-[603px] justify-between">
        <div className="pl-[19px] xl:pl-[64px] md:pl-[46px]">
          <Image
            src="/images/logo.png"
            width={263}
            height={94}
            className="lg:w-[263px] lg:h-[94px] w-[174px] h-[65px] mt-[67px] xl:mt-[77px] md:mt-[42px]"
            alt={"techtimize-logo"}
          />
          <p className="text-[14px] mt-[12px] lg:mt-[41px] mr-[51px] md:mr-0 lg:mr-0 xl:w-[316px] md:w-[240px]">
            At Techtimize, we specialize in JS frameworks, .Net, machine
            learning, and AI. We offer a range of services to help businesses of
            all sizes achieve their goals.
          </p>
          <div className="flex items-center gap-[17px] mt-[25px] lg:mt-[56px]">
            <div className="rounded-full h-[36px] w-[36px] bg-[#26A4DA] flex items-center justify-center shadow-lg">
              <FaLinkedinIn size={20} color="white" />
            </div>
            <div className="rounded-full h-[36px] w-[36px] bg-[#26A4DA] flex items-center justify-center shadow-lg">
              <FaInstagram size={20} color="white" />
            </div>
            <div className="rounded-full h-[36px] w-[36px] bg-[#26A4DA] flex items-center justify-center shadow-lg">
              <FaWhatsapp size={20} color="white" />
            </div>
          </div>
          <div className="mt-[25px] lg:mt-[26px] md:mb-[70.52px]">
            <p className="text-[#969696] text-[16px] mb-[8px]">
              We are Available on
            </p>
            <Image
              src={"/images/clutchLogo.png"}
              width={139.24}
              height={38.57}
              alt={"clutch logo"}
            />
          </div>
        </div>
        <div className="pl-[19px] md:pl-0 lg:pl-0 md:w-[156px] xl:w-[156px]">
          <h3 className="text-[25px] lg:text-[25px] md:text-[16px] font-bold mt-[67px] xl:mt-[87px] lg:mt-[160px] md:mt-[110px] mb-[26px]">
            Quick Links
          </h3>
          <ul className="text-[15px] lg:text-[15px] md:text-[12px] gap-[10px] flex flex-col">
            <li>Home</li>
            <li>Hiring Staff</li>
            <li>Services</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="pl-[19px] md:pl-0 lg:pl-0">
          <h3 className="text-[25px] lg:text-[25px] md:text-[16px] font-bold mt-[67px] xl:mt-[87px] lg:mt-[160px] md:mt-[110px] mb-[26px]">
            Services
          </h3>
          <ul className="text-[15px] lg:text-[15px] md:text-[12px] gap-[10px] flex flex-col md:mb-[51px]">
            <li>Artificial Intelligence</li>
            <li>Mobile App Development</li>
            <li>Web App Development</li>
            <li>Cloud Services</li>
            <li>UI UX Design</li>
            <li>Project Management</li>
            <li>Staff Augmentation</li>
          </ul>
        </div>
        <div className="pl-[19px] lg:pl-0 md:pl-0 md:pr-[40px] lg:pr-5 xl:w-[340px]">
          <h3 className="text-[25px] lg:text-[25px] md:text-[16px] font-bold mt-[67px] xl:mt-[87px] lg:mt-[160px] md:mt-[110px] mb-[26px]">
            Get in Touch
          </h3>
          <ul className="text-[14px] md:text-[12px] xl:text-[15px] flex flex-col gap-[21px] mb-[51.79px]">
            <li className="flex gap-[9px] items-center">
              <Image
                src={"/images/phone.png"}
                width={19}
                height={19}
                alt={"phone"}
              />
              <p>+92 327 7684077</p>
            </li>
            <li className="flex gap-[9px] items-center">
              <Image
                src={"/images/pin.png"}
                width={19}
                height={19}
                alt={"pin"}
              />
              <p>5cc DHA Rahbar Phase 1, Lahore, 54000</p>
            </li>
            <li className="flex gap-[9px] items-center">
              <Image
                src={"/images/email.png"}
                width={19}
                height={19}
                alt={"email"}
              />
              <p>hr@techtimize.co</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
