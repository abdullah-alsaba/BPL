import { FaUsersSlash } from "react-icons/fa";
import "../../../../../index.css";

const NoSelectedPlayer = ({ setAvailable }) => {
  const handelAvailablePage=()=>{
      setAvailable("available")
    }
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 border border-dashed border-gray-300 rounded-3xl bg-white shadow-sm">
      {/* Icon */}
      <div className="bg-gray-100 p-6 rounded-full mb-6">
        <FaUsersSlash className="text-6xl text-gray-400" />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-black mb-3 text-center">
        No Player Selected
      </h1>

      {/* Description */}
      <p className="text-gray-500 text-center max-w-md leading-relaxed">
        You haven't selected any players yet. Go to the available players
        section and build your ultimate dream cricket team.
      </p>

      {/* Button */}
      <button className="mt-8 bg-[#E7FE29] hover:bg-lime-300 transition px-6 py-3 rounded-xl font-semibold text-black shadow-sm cursor-pointer" onClick={() =>handelAvailablePage()}>
        Go To Available Players
      </button>
    </div>
  );
};

export default NoSelectedPlayer;
