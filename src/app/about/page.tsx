import Button from "@/components/Button/Button";
import PageHeader from "@/components/PageHeader/PageHeader";
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider";
import Image from "next/image";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";


const About = () => {
  return (
    <div className="page-pt">
      <PageHeader subHeading="About" heading="About Us" />
      <div className="flex flex-col sm:flex-row page-px w-full justify-between items-center py-[50px]">
        <div>
          <p className="page-blue-heading xl:mb-[11px] mb-[5px]">
            Meet Our Team
          </p>
          <h4 className="page-sub-heading font-semibold xl:mb-[54px] mb-[19px]">
            We’re a Digital Professional Team
          </h4>
          <p className="text-[#4F4F4F] text xl:max-w-[576px]">
            We are a leading software development company dedicated to creating
            innovative, customized solutions that empower businesses to achieve
            their goals. Our team of skilled developers, designers, and project
            managers work collaboratively to deliver high-quality software that
            meets the unique needs of each client
          </p>
          <Button
            className="bg-white  lg:h-[60px] md:h-[43px] px-[10px] h-[40px] border border-[#0B4D8E] mt-10 rounded-[7px] text-[14px] flex items-center justify-center gap-[10px]"
            text="Create your App with us"
            textClass="text text-[#0B4D8E]"
            icon={<HiArrowLongRight size={30} color="#0B4D8E" />}
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="relative">
            <Image
              src={"/assets/images/aboutImg.png"}
              width={400}
              height={400}
              alt={"about"}
              className="xl:w-[400px] xl:h-[400px] w-[250px] h-[280px]"
            />
            <Image
              src={"/assets/svgs/aboutImg2.svg"}
              width={120}
              height={120}
              alt={"2 years"}
              className="absolute xl:bottom-[30px] bottom-[4%] left-[-16.6%] xl:left-[-57px] xl:w-[120px] xl:h-[120px] w-[90px] h-[90px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#FBFCFF] xl:py-[50px]">
        <div className="flex sm:flex-row flex-col-reverse justify-center items-center">
          <div className="relative">
            <Image
              src={"/assets/images/map.png"}
              width={763}
              height={472}
              alt={"map"}
            />
            <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center">
              <div className="flex items-center xl:w-[70%] w-full xl:gap-[70px] gap-[20px] px-[20px]">
                <Image
                  src={"/assets/svgs/stat1.svg"}
                  width={170}
                  height={170}
                  alt={"stat1"}
                  className="xl:w-[170px] xl:h-[170px] w-[100px] h-[100px]"
                />
                <Image
                  src={"/assets/svgs/stat2.svg"}
                  width={170}
                  height={170}
                  alt={"stat1"}
                  className="xl:w-[170px] xl:h-[170px] w-[100px] h-[100px]"
                />
              </div>
              <div className="flex items-center justify-end xl:w-[70%] w-full xl:gap-[70px] gap-[20px] px-[20px]">
                <Image
                  src={"/assets/svgs/stat3.svg"}
                  width={170}
                  height={170}
                  alt={"stat1"}
                  className="xl:w-[170px] xl:h-[170px] w-[100px] h-[100px]"
                />
                <Image
                  src={"/assets/svgs/stat4.svg"}
                  width={170}
                  height={170}
                  alt={"stat1"}
                  className="xl:w-[170px] xl:h-[170px] w-[100px] h-[100px]"
                />
              </div>
            </div>
          </div>
          <div>
            <h4 className="page-sub-heading font-semibold xl:mb-[54px] mb-[19px]">
              Empowering Your Digital Vision
            </h4>
            <p className="text xl:w-[472px]">
              Our software IT company offers top-notch web app, mobile app
              development, and a range of creative services to clients
              worldwide. With a strong team of experienced professionals, we
              have established ourselves as a leading player in the industry.
            </p>
            <Button
              text="Contact Us"
              textClass="text"
              className="bg-[#0697D5] rounded-[7px] text-white mt-[30px] px-[20px] py-[10px]"
            />
          </div>
        </div>
      </div>
      {/* Home Section */}
      <div className="sm:px-[25px] relative flex flex-col md:justify-center md:items-center xl:pt-[50px] sm:pb-[70px] md:pb-[270px]">
        <p className="page-blue-heading xl:mb-[11px] mb-[5px] text-center">
          Digital Solutions
        </p>
        <h4 className="page-sub-heading font-semibold xl:mb-[54px] mb-[19px] px-[20px] text-center">
          Grow Faster with Our Help
        </h4>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-[10px] xl:w-[90%] w-full px-[20px]">
          <div className="flex flex-col items-center gap-[10px]">
            <Image
              src={"/assets/svgs/rating.svg"}
              width={128}
              height={128}
              alt={"rating"}
              className="xl:w-[128px] xl:h-[128px] w-[88px] h-[88px]"
            />
            <p className="xl:text-[20px] font-medium xl:w-[175px] text-center">
              Rating and Reviews
            </p>
            <p className="xl:w-[202px] text-center text">
              Boost your online reputation with our review and rating management
              software.
            </p>
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <Image
              src={"/assets/svgs/sales.svg"}
              width={128}
              height={128}
              alt={"rating"}
              className="xl:w-[128px] xl:h-[128px] w-[88px] h-[88px]"
            />
            <p className="xl:text-[20px] font-medium xl:w-[175px] text-center">
              Sales and Marketing
            </p>
            <p className="xl:w-[202px] text-center text">
              Revolutionize your sales and marketing with our software solutions
              today.
            </p>
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <Image
              src={"/assets/svgs/customerExp.svg"}
              width={128}
              height={128}
              alt={"rating"}
              className="xl:w-[128px] xl:h-[128px] w-[88px] h-[88px]"
            />
            <p className="xl:text-[20px] font-medium xl:w-[175px] text-center">
              Customer Experience
            </p>
            <p className="xl:w-[202px] text-center text">
              In the end, it's all about the customer. Build Trust and harmony
              with us.
            </p>
          </div>
        </div>
        <div className="bg-[#0697D5] sm:absolute xl:w-[70%] sm:w-[80%] sm:rounded-[10px] flex flex-col justify-center items-center xl:top-[550px] lg:top-[250px] md:top-[300px] sm:top-[270px] xl:px-[60px] xl:py-[60px] lg:p-[30px] p-[16px]">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-[20px]">
            <div className="flex gap-[15px] items-center bg-white xl:p-[20px] rounded-[5px]">
              <Image
                src={"/assets/svgs/site.svg"}
                width={52.05}
                height={52.05}
                alt={"site"}
              />
              <div>
                <p className="xl:text-[19px] font-medium mb-[5px]">
                  Customize your Site
                </p>
                <p className="text xl:w-[330px]">
                  Create a website that reflects your unique brand and vision
                  with our customizable software solutions.
                </p>
              </div>
            </div>
            <div className="flex gap-[15px] items-center bg-white xl:p-[20px] rounded-[5px]">
              <Image
                src={"/assets/svgs/mobile.svg"}
                width={62.46}
                height={62.46}
                alt={"mobile"}
              />
              <div>
                <p className="xl:text-[19px] font-medium mb-[5px]">
                  Edit your Mobile View
                </p>
                <p className="text">
                  Our software company provides the flexibility to edit your
                  mobile view, ensuring a seamless user experience across all
                  devices
                </p>
              </div>
            </div>
            <div className="flex gap-[15px] items-center bg-white xl:p-[20px] rounded-[5px]">
              <Image
                src={"/assets/svgs/feature.svg"}
                width={82.23}
                height={82.23}
                alt={"feature"}
              />
              <div>
                <p className="xl:text-[19px] font-medium mb-[5px]">
                  Add advanced features
                </p>
                <p className="text xl:w-[330px]">
                  Elevate your business with our software solutions and
                  customize them with advanced features tailored.
                </p>
              </div>
            </div>
            <div className="flex gap-[15px] items-center bg-white xl:p-[20px] rounded-[5px]">
              <Image
                src={"/assets/svgs/optimization.svg"}
                width={59.33}
                height={59.33}
                alt={"optimization"}
              />
              <div>
                <p className="xl:text-[19px] font-medium mb-[5px]">
                  Optimize for Search Engine
                </p>
                <p className="text xl:w-[330px]">
                  We help you maximize your online visibility with our
                  software's SEO optimization tools and improve your search
                  engine rankings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-[300px] bg-[#FBFCFF]">
        <p className="page-blue-heading mt-[67px] md:mt-0 mb-[3px] page-px">
          Testimonials
        </p>
        <h5 className="page-sub-heading font-semibold mb-[42px] page-px">
          Client Success Stories
        </h5>
        <div className="mb-[99px] md:mb-[118px] md:pl-[30px] md:pr-[20px] xl:pl-[60px] xl:pr-[30px] sm:pl-[20px] sm:pr-[10px] lg:mb-[144px]">
          {/* <TestimonialSlider /> */}
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default About;
