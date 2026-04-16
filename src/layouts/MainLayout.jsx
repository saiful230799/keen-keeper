import { Outlet } from "react-router";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  const [activities, setActivities] = useState([]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Outlet context={{ activities, setActivities }} /> 
      </main>
      <Footer />
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default MainLayout;