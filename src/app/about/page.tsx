import React from "react";

const About = () => {
  return (
    <div>
      <div className="h-[319px] bg-[#FBFCFF] flex items-center justify-center">
        <div>
          <p className="text-center text-[16px] text-[#727272] mb-[5px]">
            Home {">"}
            {">"} <span className="text-[#069AD8]">About</span>
          </p>
          <h1 className="text-[32px] font-bold text-center text-[#474747]">
            About Us
          </h1>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="px-[25px]">
          <p className="text-[16px] text-[#069AD8]">Meet Our Team</p>
          <h4 className="text-[25px] font-semibold">
            We’re a Digital Professional Team
          </h4>
          <p className="text-[#4F4F4F] text-[14px]">
            We are a leading software development company dedicated to creating
            innovative, customized solutions that empower businesses to achieve
            their goals. Our team of skilled developers, designers, and project
            managers work collaboratively to deliver high-quality software that
            meets the unique needs of each client
          </p>
          <button className="w-[236px] h-[43px] rounded-[10px]">
            <p>Create your App with us</p>
          </button>
        </div>
        <div>2</div>
      </div>
    </div>
  );
};

export default About;
