import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#5A5EAB] text-white p-4 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-lg">Company</h3>
          <ul className="mt-4 space-y-2 list-none">
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Security & Privacy</h3>
          <ul className="mt-4 space-y-2 list-none">
            <li>
              <a href="#" className="hover:text-gray-400">
                Secure Website
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                PCI Compliance
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-semibold text-lg">Subscribe</h3>
          <p className="mt-4">Invite our customer to join our list</p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full rounded bg-gray-700 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 w-full"
            >
              Sign up
            </button>
          </form>
        </div>
        <div>
          <ul className=" space-y-2 list-none">
            <h3 className="font-semibold text-lg">
              Statements made on this website have not been evaluated by the
              U.S. Food and Drug Administration. These products are not intended
              to diagnose, treat, cure or prevent any disease. Information
              provided by this website or this company is not a substitute for
              individual medical advice
            </h3>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
