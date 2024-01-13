"use client";
import React, { Component } from "react";
import { testimonials } from "@/constants/testimonialData";
import Slider from "react-slick";
import TestimonialCard from "../TestimonialCard";

class TestimonialSlider extends Component {
  componentDidMount() {
    // You can customize the initialization here if needed
    // For example, you can log something to check if this block is executed
    console.log("Slider initialized");
  }
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
        {testimonials?.map((data) => {
          return (
            <div key={data.id} className="pb-[10px]">
              <TestimonialCard testimonialData={data} />
            </div>
          );
        })}
      </Slider>
    );
  }
}

export default TestimonialSlider;
