import React from "react";

const foodItems = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    price: "$12.99",
    image:
      "https://images.unsplash.com/photo-1579584035092-053b2bd1cf12?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
  },
  {
    id: 2,
    name: "Margherita Pizza",
    price: "$10.99",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
  },
  {
    id: 3,
    name: "Sushi Platter",
    price: "$18.99",
    image:
      "https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?auto=format&fit=crop&q=80&w=1549&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
  },
  // Add more food items here
  {
    id: 4,
    name: "Pasta",
    price: "$12.99",
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
  },
  {
    id: 5,
    name: "Burger",
    price: "$10.99",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
  },
  {
    id: 6,
    name: "Nachos",
    price: "$18.99",
    image:
      "https://images.unsplash.com/photo-1582169296194-e4d644c48063?auto=format&fit=crop&q=80&w=1400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your image URL
  },
  // Add more food items here
];

const Gallery = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="font-dancing font-bold text-2xl text-red-500 text-center">Discovers</h2>
      <h1 className="text-4xl font-extrabold text-center mb-8">Our Food Gallery</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodItems.map((foodItem) => (
          <div key={foodItem.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={foodItem.image}
              alt={foodItem.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="text-center mb-4 p-4">
              <h2 className="text-2xl mb-4 font-bold">{foodItem.name}</h2>
              <span className="font-bold">Beef / Olive Oil / Salt</span>
              <p className="mt-4">
                Considered introduced themselves mr to discretion at. Means
                among saw hopes for. Death mirth in oh learn he equal on.
              </p>
              <hr className="mt-4" />
              <button className="mt-2 font-bold text-[#e7272d]">Order now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
