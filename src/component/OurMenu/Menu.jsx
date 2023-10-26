import React from "react";
import Swal from "sweetalert2";

const items = [
  // Define your menu items here

  {
    id: 1,
    name: "Spaghetti Bolognese",
    price: "$12.99",
    description: "Classic Italian spaghetti with rich Bolognese sauce.",
    image:
      "https://images.pexels.com/photos/842519/pexels-photo-842519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    price: "$11.99",
    description: "Delicious Margherita pizza with fresh mozzarella and basil.",
    image:
      "https://images.pexels.com/photos/10681098/pexels-photo-10681098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Chicken Caesar Salad",
    price: "$9.99",
    description: "Crispy chicken on a bed of fresh Caesar salad greens.",
    image:
      "https://images.pexels.com/photos/4869359/pexels-photo-4869359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    name: "Grilled Salmon",
    price: "$14.99",
    description: "Grilled salmon fillet with lemon butter sauce.",
    image:
      "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    name: "Mushroom Risotto",
    price: "$13.99",
    description: "Creamy mushroom risotto cooked to perfection.",
    image:
      "https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    price: "$7.99",
    description: "Warm chocolate lava cake with a molten center.",
    image:
      "https://images.pexels.com/photos/5468024/pexels-photo-5468024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  // Add more menu items as needed
];

const Menu = () => {
  const handleAddToCartClick = () => {
    Swal.fire({
      title: "Yeah!",
      text: "This product added to cart",
      icon: "success",
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="font-dancing font-bold text-2xl text-red-500 text-center">
        Discovers
      </h2>
      <h1 className="text-4xl font-extrabold text-center mb-4">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <img
              src={item.image}
              alt={item.name}
              className="rounded-full h-32 mb-4"
            />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.price}</p>
            <p className="text-gray-700">{item.description}</p>

            <button
              className="w-full mt-auto hover:bg-red-500 bg-red-600 py-2 rounded-md text-white font-bold"
              onClick={handleAddToCartClick}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
