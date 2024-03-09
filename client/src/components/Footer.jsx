import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white p-8">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/3 lg:w-1/4 mb-8">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul>
            <li>Prescription Medicines</li>
            <li>Over-the-Counter</li>
            <li>Vitamins & Supplements</li>
            <li>Personal Care</li>
           git 
          </ul>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/4 mb-8">
          <h3 className="text-lg font-semibold mb-4">Platform</h3>
          <ul>
            <li>How it Works</li>
            <li>Mobile App</li>
            <li>Desktop App</li>
           
          </ul>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/4 mb-8">
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul>
            <li>Our Story</li>
            <li>Team</li>
            <li>Blog</li>
            
          </ul>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/4 mb-8">
          <h3 className="text-lg font-semibold mb-4">Help Center</h3>
          <ul>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Terms of Service</li>
            
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-4 flex justify-between items-center">
        <p>&copy; 2024 Your Medicine Store. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            Partners
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
