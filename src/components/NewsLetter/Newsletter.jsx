import { FaPaperPlane } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 relative z-10">
      <div className="bg-base-100 rounded-3xl border border-gray-300 shadow-xl p-10 md:p-16 bg-linear-to-r from-cyan-50 to-orange-100">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Subscribe to our Newsletter
          </h2>

          <p className="text-gray-500">
            Get the latest updates and news right in your inbox!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full md:w-96"
            />

            <button className="btn border-none text-black bg-linear-to-r from-pink-300 to-yellow-300 hover:from-yellow-300 hover:to-pink-300">
              Subscribe
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
