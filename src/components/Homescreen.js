import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Footer from './Footer';
// import logo from '../../public/assets/logo.png';
import logo from '../assets/logo.png';
const Homescreen = () => {
    const images = [
        'https://picsum.photos/200/200?random=1',
        'https://picsum.photos/200/200?random=2',
        'https://picsum.photos/200/200?random=3',
        'https://picsum.photos/200/200?random=4',
        'https://picsum.photos/200/200?random=5',
        'https://picsum.photos/200/200?random=6',
    ];

    const names = [
        'Multivitamins 1',
        'Multivitamins 2',
        'Multivitamins 3',
        'Multivitamins 4',
        'Multivitamins 5',
        'Multivitamins 6',
    ];
    const imageUrl = 'https://picsum.photos/400/400?random=1';
    const title = 'Multivitamins';
    const description = 'A balanced blend of vitamins to support your health.';

    const videoId = 'dQw4w9WgXcQ'; // Replace with your YouTube video ID
  
    const products = [
        {
            image: "https://via.placeholder.com/60",
           
        },
        {
            image: "https://via.placeholder.com/60",
          
        },
        {
            image: "https://via.placeholder.com/60",
           
        },
        {
            image: "https://via.placeholder.com/60",
       
        },
        {
            image: "https://via.placeholder.com/60",
          
        },
    ];
  return (
    <div className="flex flex-col min-h-screen">
  
 
      <nav className="navbar sticky-top navbar-expand-lg bg-[#5A5EAB] navbar-dark w-100 text-white justify-content-center">
        <div className="d-flex">
        <div className="text-sm">Worldwide Shipping - Duties and Taxes Prepaid</div>
        </div>
      </nav>
        
      <nav className="navbar navbar-expand-lg bg-white navbar-dark w-full flex  py-4">
      <img
            src={logo}
            width="100rem"
            className="logo d-inline-block align-top mx-5"
            alt="React Bootstrap logo"
          />
  <a href="#" className="tab hover:text-gray-400 border-b-2 border-transparent hover:border-gray-400 transition-colors duration-300">
    Home
  </a>
  <a href="#" className="tab hover:text-gray-400 border-b-2 border-transparent hover:border-gray-400 transition-colors duration-300">
    Shop by Brand
  </a>
  <a href="#" className="tab hover:text-gray-400 border-b-2 border-transparent hover:border-gray-400 transition-colors duration-300">
    Shop by Category
  </a>
  <a href="#" className="tab hover:text-gray-400 border-b-2 border-transparent hover:border-gray-400 transition-colors duration-300">
    Meet Us
  </a>
  <a href="#" className="tab hover:text-gray-400 border-b-2 border-transparent hover:border-gray-400 transition-colors duration-300">
    CMO
  </a>
  <a href="#" className="tab hover:text-gray-400 border-b-2 border-transparent hover:border-gray-400 transition-colors duration-300">
    Contact Us
  </a>
  <div className='ml-auto mr-5 space-x-4'>
    <SearchIcon/>
    <PersonIcon/>
    <WorkOutlineIcon/>
  </div>
</nav>


      <div>
            <section className="bg-yellow-200 text-center p-12 min-h-[400px]">
                <h1 className="text-4xl font-bold">Immune Support</h1>
                <p className="mt-4">Boost your health with our top products</p>
                <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                    Shop Now
                </button>
            </section>
      
        </div>
        <section className="p-8 bg-gray-100">
            <section className="p-8 bg-transparent ">
                <h2 className="text-2xl font-bold mb-6">Top brands</h2>
                <div className="flex  justify-center space-x-4">
                    {products.map((product, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg flex flex-col items-center w-60 h-32">
                            <img src={product.image}  className="w-3/4 h-auto object-cover mb-2" />
                          
                        </div>
                    ))}
                </div>
            </section>
        </section>

      {/* Top Brands Section */}
      <section className="p-8 bg-gray-100">
      {/* Featured Products */}
      <section className="p-8 bg-white">
  <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
  <div className="flex overflow-x-auto space-x-6">
    {/* Example Product */}
    <div className="bg-gray-100 p-4 rounded-lg min-w-[200px]">
      <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-32 object-cover mb-4" />
      <h3 className="font-semibold">Pure Encapsulations Magnesium</h3>
      <p className="font-bold mt-2">Rs. 115.99</p>
      <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Know More
      </button>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg min-w-[200px]">
      <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-32 object-cover mb-4" />
      <h3 className="font-semibold">Pure Encapsulations Magnesium</h3>
      <p className="font-bold mt-2">Rs. 115.99</p>
      <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Know More
      </button>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg min-w-[200px]">
      <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-32 object-cover mb-4" />
      <h3 className="font-semibold">Pure Encapsulations Magnesium</h3>
      <p className="font-bold mt-2">Rs. 115.99</p>
      <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Know More
      </button>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg min-w-[200px]">
      <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-32 object-cover mb-4" />
      <h3 className="font-semibold">Pure Encapsulations Magnesium</h3>
      <p className="font-bold mt-2">Rs. 115.99</p>
      <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Know More
      </button>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg min-w-[200px]">
      <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-32 object-cover mb-4" />
      <h3 className="font-semibold">Pure Encapsulations Magnesium</h3>
      <p className="font-bold mt-2">Rs. 115.99</p>
      <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Know More
      </button>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg min-w-[200px]">
      <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-32 object-cover mb-4" />
      <h3 className="font-semibold">Pure Encapsulations Magnesium</h3>
      <p className="font-bold mt-2">Rs. 115.99</p>
      <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Know More
      </button>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg min-w-[200px]">
      <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-32 object-cover mb-4" />
      <h3 className="font-semibold">Pure Encapsulations Magnesium</h3>
      <p className="font-bold mt-2">Rs. 115.99</p>
      <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Know More
      </button>
    </div>
    {/* Repeat for other products */}
  </div>
</section>
      <h2 className="text-2xl font-bold mb-6">Proven BestSellers</h2>

      <div className="flex justify-center p-4 ">
            <div className="flex w-full justify-around ">
                {images.map((src, index) => (
                    <div key={index} className="flex flex-col items-center m-2 w-1/6">
                        <img
                            src={src}
                            alt={`Image ${index + 1}`}
                            className="h-32 rounded-full object-cover" // Fixed height
                        />
                        <p className="text-center mt-2">{names[index]}</p> {/* Displaying the name */}
                    </div>
                ))}
            </div>
        </div>
      <h2 className="text-2xl font-bold mb-6">Proven BestSellers</h2>

      <div className="flex justify-center p-4">
            <div className="flex w-full ">
                {images.map((src, index) => (
                    <div key={index} className="flex flex-col items-center m-2 w-1/6">
                        <img
                            src={src}
                            alt={`Image ${index + 1}`}
                            className="h-32 rounded object-cover" // Fixed height
                        />
                        <p className="text-center mt-2">{names[index]}</p> {/* Displaying the name */}
                    </div>
                ))}
            </div>
        </div>
    
      
      </section>


      <section className="p-8 bg-white">
  <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
  <div className="flex overflow-x-auto space-x-6">

    <div className="bg-gray-100 p-4 rounded-lg min-w-[200px]">
      <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-32 object-cover mb-4" />
      <h3 className="font-semibold">Pure Encapsulations Magnesium</h3>
      <p className="font-bold mt-2">Rs. 115.99</p>
      <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Know More
      </button>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg min-w-[200px]">
      <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-32 object-cover mb-4" />
      <h3 className="font-semibold">Pure Encapsulations Magnesium</h3>
      <p className="font-bold mt-2">Rs. 115.99</p>
      <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Know More
      </button>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg min-w-[200px]">
      <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-32 object-cover mb-4" />
      <h3 className="font-semibold">Pure Encapsulations Magnesium</h3>
      <p className="font-bold mt-2">Rs. 115.99</p>
      <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Know More
      </button>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg min-w-[200px]">
      <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-32 object-cover mb-4" />
      <h3 className="font-semibold">Pure Encapsulations Magnesium</h3>
      <p className="font-bold mt-2">Rs. 115.99</p>
      <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Know More
      </button>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg min-w-[200px]">
      <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-32 object-cover mb-4" />
      <h3 className="font-semibold">Pure Encapsulations Magnesium</h3>
      <p className="font-bold mt-2">Rs. 115.99</p>
      <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Know More
      </button>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg min-w-[200px]">
      <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-32 object-cover mb-4" />
      <h3 className="font-semibold">Pure Encapsulations Magnesium</h3>
      <p className="font-bold mt-2">Rs. 115.99</p>
      <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Know More
      </button>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg min-w-[200px]">
      <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-32 object-cover mb-4" />
      <h3 className="font-semibold">Pure Encapsulations Magnesium</h3>
      <p className="font-bold mt-2">Rs. 115.99</p>
      <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Know More
      </button>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg min-w-[200px]">
      <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-32 object-cover mb-4" />
      <h3 className="font-semibold">Pure Encapsulations Magnesium</h3>
      <p className="font-bold mt-2">Rs. 115.99</p>
      <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Know More
      </button>
    </div>
  </div>
</section>

<div className="flex flex-col md:flex-row h-75 w-full mx-auto  bg-white shadow-lg rounded-lg mb-5">
            <img
                src={imageUrl}
                alt="Multivitamins"
                className="w-full md:w-1/2 h-64 object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
            <div className="flex flex-col justify-center p-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="mt-2 text-gray-600">{description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Learn More
                </button>
            </div>
        </div>
        <div className="flex flex-col md:flex-row w-full mx-auto bg-white shadow-lg rounded-lg">
            <div className="w-full md:w-full rounded p-4">
                <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={title}
                    frameBorder="0"
                    allowFullScreen
                    className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                ></iframe>
            </div>
         
        </div>
     <Footer/>
    </div>
  );
};

export default Homescreen;
