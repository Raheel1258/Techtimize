"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { SERVICES_ENDPOINT, SERVICE_CATEGORIES_ENDPOINT } from "@/app/api"; // Import API endpoints

interface Category {
  _id: string;
  categoryName: string;
  categoryIcon: string;
  isActive: boolean;
  about: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  serviceCategoryId: string[]; // Include serviceCategoryId to match with categories
}

const serviceCardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const PopularServices = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]); // State to store filtered services
  const [animationKey, setAnimationKey] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch Categories and Services
  useEffect(() => {
    const fetchCategoriesAndServices = async () => {
      setLoading(true);
      try {
        // Fetch categories
        const categoryResponse = await fetch(SERVICE_CATEGORIES_ENDPOINT());
        if (!categoryResponse.ok) throw new Error("Failed to fetch categories");

        const categoryData = await categoryResponse.json();
        console.log("Category Data:", categoryData); // Log the response to inspect its structure

        // Check if categoryData is in expected format
        if (!Array.isArray(categoryData.data)) {
          throw new Error("Invalid category data format");
        }
        setCategories(categoryData.data);

        const defaultCategory = categoryData.data[0];
        setSelectedCategory(defaultCategory);

        // Fetch services for the first category by default
        if (defaultCategory) {
          const serviceResponse = await fetch(SERVICES_ENDPOINT());
          if (!serviceResponse.ok) throw new Error("Failed to fetch services");

          const serviceData = await serviceResponse.json();
          console.log("Service Data:", serviceData); // Log the service response

          // Check if serviceData.data is an array (unwrap from response)
          if (Array.isArray(serviceData.data)) {
            setServices(serviceData.data);  // Use serviceData.data
            setAnimationKey(prevKey => prevKey + 1); // Update key to trigger animation
          } else {
            throw new Error("Invalid service data format");
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoriesAndServices();
  }, []);

  // Fetch Services based on Selected Category
  useEffect(() => {
    if (selectedCategory) {
      const filtered = services.filter(service =>
        service.serviceCategoryId.includes(selectedCategory._id) // Match serviceCategoryId
      );
      setFilteredServices(filtered); // Update filteredServices state
    }
  }, [selectedCategory, services]); // Update filtered services when selectedCategory or services change

  return (
    <div className="w-full">
      {/* Categories Selection */}
      <ul className="flex flex-nowrap items-center sm:justify-center lg:justify-between gap-3 sm:gap-6 overflow-hidden overflow-x-auto w-full scrollbar-hide px-[20px] text">
        {categories.map((category) => (
          <li
            key={category._id}
            className={`whitespace-nowrap sm:w-auto cursor-pointer satoshi-medium ${selectedCategory?.categoryName === category.categoryName ? "text-primary" : "text-black"}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.categoryName}
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="w-full flex justify-center my-[30px]">
        <div className="h-[3px] rounded-full sm:w-[80%] w-[95%] bg-white drop-shadow-lg" />
      </div>

      {/* Description */}
      <p className="text mb-[30px] text-black">
        We're your dedicated partner in web and mobile app development,
        specializing in creating bespoke solutions that bring your unique vision
        to life. With a focus on user-centric design, scalability, and robust
        functionality, we're here to empower your online presence and drive your
        success.
      </p>

      {/* Offer Heading */}
      <h5 className="mb-[20px] text-[22px] text-black">What we Offer</h5>

      {/* Services Display */}
      <motion.div
        key={animationKey} // Changes on category selection
        initial="hidden"
        animate="visible"
        variants={serviceCardVariants}
        transition={{ duration: 0.5 }}
        className="flex flex-nowrap gap-[50px] overflow-x-auto scrollbar-hide max-w-full"
      >
        {filteredServices.map((service) => (
          <div key={service.id} className="flex-none flex-shrink-0 w-full xl:w-1/4 sm:w-[35%]">
            <ServiceCard title={service.title} description={service.description} image={service.image} />
          </div>
        ))}
      </motion.div>

      {/* Loading State */}
      {loading && (
        <div className="text-center mt-5">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default PopularServices;
