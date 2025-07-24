import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Footer from './Footer';
import logo from '../assets/logo.png';

const Homescreen = () => {
  const images = Array.from({ length: 6 }, (_, i) => `https://picsum.photos/200/200?random=${i + 1}`);
  const names = images.map((_, i) => `Multivitamins ${i + 1}`);
  const imageUrl = 'https://picsum.photos/400/400?random=10';
  const title = 'Multivitamins';
  const description = 'A balanced blend of vitamins to support your health.';
  const videoId = 'dQw4w9WgXcQ';

  const products = Array.from({ length: 6 }, () => ({
    image: 'https://via.placeholder.com/60',
  }));

  const featuredProducts = Array.from({ length: 8 }, () => ({
    image: 'https://via.placeholder.com/150',
    name: 'Pure Encapsulations Magnesium',
    price: 'Rs. 115.99',
  }));

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Top Banner */}
      <nav className="bg-[#5A5EAB] text-white py-2 text-center text-sm font-medium">
        Worldwide Shipping - Duties and Taxes Prepaid
      </nav>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-md py-4 px-6 flex items-center flex-wrap justify-between">
        <div className="flex items-center space-x-6">
          <img src={logo} alt="Logo" className="w-[100px]" />
          <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
            {['Home', 'Shop by Brand', 'Shop by Category', 'Meet Us', 'CMO', 'Contact Us'].map((tab, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-gray-400 border-b-2 border-transparent hover:border-gray-400 transition"
              >
                {tab}
              </a>
            ))}
          </div>
        </div>
        <div className="flex space-x-4 text-gray-600 text-xl mt-2 md:mt-0">
          <SearchIcon />
          <PersonIcon />
          <WorkOutlineIcon />
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="bg-yellow-200 text-center p-12">
        <h1 className="text-4xl font-bold mb-4">Immune Support</h1>
        <p className="text-lg">Boost your health with our top products</p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
          Shop Now
        </button>
      </section>

      {/* Top Brands */}
      <section className="bg-gray-100 py-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Top Brands</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded shadow w-28 h-28 flex items-center justify-center">
              <img src={product.image} alt="Brand" className="object-contain w-full h-full" />
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4 bg-white">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {featuredProducts.map((product, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg min-w-[220px] shadow">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-4" />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="font-bold mt-2">{product.price}</p>
              <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Know More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Bestsellers - Rounded */}
      <section className="py-12 px-4 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-center">Proven Bestsellers</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {images.map((src, index) => (
            <div key={index} className="flex flex-col items-center w-28">
              <img src={src} alt={`Product ${index + 1}`} className="h-28 w-28 rounded-full object-cover" />
              <p className="text-center mt-2 text-sm">{names[index]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Highlight Section */}
      <section className="flex flex-col md:flex-row bg-white shadow-md rounded-lg m-4 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full md:w-1/2 h-64 object-cover"
        />
        <div className="flex flex-col justify-center p-6 md:w-1/2">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="mt-2 text-gray-600">{description}</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Embedded YouTube Video */}
      <section className="bg-white p-6 shadow rounded-lg m-4">
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allowFullScreen
          className="rounded"
        ></iframe>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homescreen;
