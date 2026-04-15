import { NavLink } from "react-router";
import { HiOutlineHome } from "react-icons/hi2"; 
import { LuClock3 } from "react-icons/lu";      
import { AiOutlineLineChart } from "react-icons/ai";

const FooterSubNav = () => {

  const navLinkStyles = ({ isActive }) =>
    `flex items-center gap-2 px-5 py-2 rounded-lg font-bold transition-all ${
      isActive
        ? "bg-[#1A302B] text-white" 
        : "text-gray-500 hover:bg-gray-100"
    }`;

  return (
    <div className="bg-white border-t border-b border-gray-100 py-4 px-4 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <NavLink to="/" className="text-xl font-black tracking-tighter flex items-center">
          <span className="text-[#1F2937]">Keen</span>
          <span className="text-[#244D3F]">Keeper</span>
        </NavLink>
        
        <ul className="flex items-center gap-2 md:gap-6">
          <li>
            <NavLink to="/" className={navLinkStyles}>
              <HiOutlineHome size={18} /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/timeline" className={navLinkStyles}>
              <LuClock3 size={18} /> Timeline
            </NavLink>
          </li>
          <li>
            <NavLink to="/stats" className={navLinkStyles}>
              <AiOutlineLineChart size={18} /> Stats
            </NavLink>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default FooterSubNav;