import "../../index.css";
import heroImg from "../../assets/bg-shadow.png";
import heroLogo from "../../assets/banner-main.png";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Dark Hero Box */}
      <div
        className="bg-black rounded-3xl py-16 px-6 md:px-10 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo */}
          <img
            src={heroLogo}
            alt="Cricket Logo"
            className="w-52 md:w-64 mb-6"
          />

          {/* Heading */}
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 mb-8 text-sm md:text-base">
            Beyond Boundaries Beyond Limits
          </p>

          {/* Button Border Effect */}
          <div className="border border-lime-400 p-1 rounded-2xl">
            <button className="btn bg-[#E7FE29] border-none text-black font-bold rounded-xl hover:bg-lime-300">
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
