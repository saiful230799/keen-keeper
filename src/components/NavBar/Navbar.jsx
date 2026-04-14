import { NavLink } from "react-router";
import { HiOutlineHome } from "react-icons/hi2"; 
import { LuClock3 } from "react-icons/lu";      
import { AiOutlineLineChart } from "react-icons/ai";

const Navbar = () => {

  const navLinkStyles = ({ isActive }) =>
    `flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all duration-300 ${
      isActive
        ? "bg-[#1A302B] text-white shadow-md" 
        : "text-gray-500 hover:bg-gray-100"
    }`;

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={navLinkStyles}>
          <HiOutlineHome size={20} /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/timeline" className={navLinkStyles}>
          <LuClock3 size={19} /> Timeline
        </NavLink>
      </li>
      <li>
        <NavLink to="/stats" className={navLinkStyles}>
          <AiOutlineLineChart size={20} /> Stats
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white shadow px-4 md:px-12 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-2xl w-52 gap-2"
          >
            {navLinks}
          </ul>
        </div>
        <NavLink to="/" className="text-2xl font-black tracking-tighter flex items-center">
          <span className="text-[#1F2937]">Keen</span>
          <span className="text-[#244D3F]">Keeper</span>
        </NavLink>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="flex items-center gap-4">
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;