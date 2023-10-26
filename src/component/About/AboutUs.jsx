import React from "react";
import image from'../../../public/photo-1592861956120-e524fc739696.avif'

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="font-dancing font-bold text-2xl text-red-500 text-center">Discovers</h2>
        <h1 className=" text-center text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <img className="max-w-xs w-full mx-auto mb-6" src={image} alt="" />
        <p className="text-gray-600 text-lg mb-6">
          Welcome to MealDB, your one-stop destination for delicious and
          nutritious meal recipes. At MealDB, we are passionate about helping
          you discover and create mouthwatering meals that you and your family
          will love.
        </p>
        <p className="text-gray-600 text-lg mb-6">
          Our team of experienced chefs and food enthusiasts work tirelessly to
          curate a vast collection of recipes that cater to all tastes and
          dietary preferences. Whether you're a carnivore, a vegetarian, or
          follow a special diet, you'll find a variety of recipes that suit your
          culinary needs.
        </p>
        <p className="text-gray-600 text-lg mb-6">
          We believe that cooking should be an enjoyable and accessible
          experience for everyone. That's why we provide step-by-step
          instructions, ingredient lists, and cooking tips to make your meal
          preparation as easy as possible.
        </p>
        <p className="text-gray-600 text-lg mb-6">
          If you ever need assistance or have questions about our recipes,
          feel free to <a href="/contact" className="text-blue-600">contact us</a>.
        </p>
        <p className="text-gray-600 text-lg">
          Thank you for choosing MealDB as your culinary companion. Happy
          cooking!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
