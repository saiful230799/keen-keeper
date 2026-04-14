import { useLocation } from "react-router";
import { FaInstagram, FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import FooterSubNav from "../FooterSubNav/FooterSubNav";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="mt-auto">
      {location.pathname === "/" && <FooterSubNav />}
      <div className="bg-[#244D3F] text-white py-12 px-4 md:px-12">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">KeenKeeper</h2>
          
          <p className="max-w-2xl mx-auto text-gray-300 mb-8 leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Social Links</h3>
            <div className="flex justify-center gap-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1A302B] hover:scale-110 transition-transform">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1A302B] hover:scale-110 transition-transform">
                <FaSquareFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1A302B] hover:scale-110 transition-transform">
                <FaXTwitter />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-evenly items-center text-sm text-gray-400 gap-4">
            <p>© 2026 KeenKeeper. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;