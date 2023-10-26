import React from "react";

const chefs = [
  {
    id: 1,
    name: "Chef John Doe",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
    facebook: "https://www.facebook.com/chefjohndoe",
    linkedin: "https://www.linkedin.com/in/chefjohndoe",
    instagram: "https://www.instagram.com/chefjohndoe",
  },
  {
    id: 2,
    name: "Chef Jane Smith",
    image: "https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
    facebook: "https://www.facebook.com/chefjanesmith",
    linkedin: "https://www.linkedin.com/in/chefjanesmith",
    instagram: "https://www.instagram.com/chefjanesmith",
  },
  {
    id: 2,
    name: "Chef Jane Smith",
    image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&q=80&w=1387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
    facebook: "https://www.facebook.com/chefjanesmith",
    linkedin: "https://www.linkedin.com/in/chefjanesmith",
    instagram: "https://www.instagram.com/chefjanesmith",
  },
  // Add more chef profiles here
];

const Chef = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="font-dancing font-bold text-2xl text-red-500 text-center">Discovers</h2>
        <h1 className="text-4xl font-extrabold mb-6 text-center">Our Chefs</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chefs.map((chef) => (
          <div
            key={chef.id}
            className="bg-white rounded-lg shadow-md p-4"
          >
            <img
              src={chef.image}
              alt={chef.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{chef.name}</h2>
              <div className="flex justify-between mt-4">
                <a
                  href={chef.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href={chef.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href={chef.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chef;
