import { GET, GET_ALL_SUCCESS_STORIES_ENDPOINT } from "@/app/api";
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider";

interface Service {
  _id: string;
  categoryName: string;
  categoryIcon: string;
  styling?: string;
  isActive: boolean;
  about: string;
}

const TestimonialsSection = async () => {
  const response = await GET<Service[]>(GET_ALL_SUCCESS_STORIES_ENDPOINT);
  if (response.status === "error") {
    throw new Error(response.error);
  }

  const successStories: Service[] = response.data;

  return (
    <div className="md:pt-[60px] sm:mt-[150px]">
      <p className="page-blue-heading mt-[67px] md:mt-0 mb-[3px] sm:px-[25px] px-[23px] md:px-[30px] lg:px-[40px] xl:px-[100px]">
        Testimonials
      </p>
      <h5 className="page-sub-heading font-semibold mb-[42px] px-[23px] sm:px-[25px] md:px-[30px] lg:px-[40px] xl:px-[100px]">
        Client Success Stories
      </h5>
      <div className="mb-[99px] md:mb-[118px] md:pl-[30px] md:pr-[20px] xl:pl-[100px] xl:pr-[30px] sm:pl-[20px] sm:pr-[10px] lg:mb-[144px]">
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default TestimonialsSection;
