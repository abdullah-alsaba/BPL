import logoImg from "../../assets/logo.png";
import dollarImg from "../../assets/dollar_1.png";
import "../../index.css";


const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-5">
      <div className="navbar bg-base-100">
        {/* Left side */}
        <div className="navbar-start">
          <img src={logoImg} alt="A player with bat" className="w-16" />
        </div>

        {/* Right side */}
        <div className="navbar-end gap-8">
          <ul className="menu menu-horizontal px-1 text-gray-500">
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

          <button className="btn bg-white border rounded-xl font-bold px-5">
            0 Coin
            <img src={dollarImg} alt="Dollar icon" className="w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
