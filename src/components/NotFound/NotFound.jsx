import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-black text-[#244D3F]">404</h1>
        
        <div className="mt-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          
          <Link 
            to="/" 
            className="btn bg-[#244D3F] hover:bg-[#1a3a30] text-white border-none px-8 rounded-full"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;