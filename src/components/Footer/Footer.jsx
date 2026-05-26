import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import FooterLogo from "../../assets/logo-footer.png"

const Footer = () => {
  return (
    <footer className="bg-[#06091A] text-white pt-36 -mt-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img
            src={FooterLogo}
            alt="logo"
            className="w-24"
          />
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gray-700">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>

            <p className="text-gray-400 leading-7">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a className="hover:text-yellow-300 transition">Home</a>
              </li>

              <li>
                <a className="hover:text-yellow-300 transition">Services</a>
              </li>

              <li>
                <a className="hover:text-yellow-300 transition">About</a>
              </li>

              <li>
                <a className="hover:text-yellow-300 transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe</h3>

            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>

            <div className="join w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered join-item w-full text-black"
              />

              <button className="btn join-item border-none text-black bg-linear-to-r from-yellow-200 to-pink-300">
                Subscribe
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-xl">
              <a className="hover:text-yellow-300 cursor-pointer">
                <FaFacebookF />
              </a>

              <a className="hover:text-yellow-300 cursor-pointer">
                <FaTwitter />
              </a>

              <a className="hover:text-yellow-300 cursor-pointer">
                <FaInstagram />
              </a>

              <a className="hover:text-yellow-300 cursor-pointer">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-6 text-gray-500 text-sm">
          @2024 Your Company All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
