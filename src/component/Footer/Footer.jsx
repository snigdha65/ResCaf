import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-2xl font-semibold mb-2">ResCaf</h3>
          <p className="text-gray-400">"Indulge in a culinary journey at our charming restaurant,<br /> where delectable flavors and warm hospitality come together. <br /> Experience exquisite dishes, handcrafted with care, in a cozy ambiance."</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className='text-red-500'>
              <li><a href="">Facebook</a></li>
              <li><a href="">Instagram</a></li>
              <li><a href="">Linkedin</a></li>
              <li><a href="">Twitter</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Products</h4>
            <ul className='text-red-500'>
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p>&copy; 2023 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

