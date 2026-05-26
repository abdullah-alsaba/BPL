import logoImg from "../../assets/logo.png";
import dollarImg from "../../assets/dollar_1.png";
import "../../index.css";

const Navbar = ({ coin }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="navbar bg-base-100 rounded-xl">
        {/* Left */}
        <div className="navbar-start">
          <img src={logoImg} alt="Logo" className="w-12 md:w-16" />
        </div>

        {/* Mobile Menu */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-gray-500 gap-2">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end gap-2 md:gap-4">
          {/* Dropdown for Mobile */}
          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              ☰
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>

          {/* Coin Button */}
          <button className="btn bg-white border rounded-xl font-bold px-3 md:px-5 text-sm md:text-base">
            {coin}
            <span className="hidden sm:inline"> Coin</span>

            <img src={dollarImg} alt="Dollar" className="w-4 md:w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
