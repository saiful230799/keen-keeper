import { useEffect, useState } from "react";
import { FaPhoneAlt, FaVideo, FaHandsHelping } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

const Timeline = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("/timeline.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case "call": return <FaPhoneAlt className="text-gray-600" />;
      case "text": return <IoChatbubbleEllipsesSharp className="text-gray-600" />;
      case "video": return <FaVideo className="text-gray-600" />;
      case "meet": return <FaHandsHelping className="text-orange-400" size={20} />;
      default: return <FaPhoneAlt />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <h1 className="text-3xl font-bold text-[#1A302B] mb-4">Timeline</h1>
      
      <div className="mb-6">
        <select className="select select-bordered w-full max-w-xs bg-white text-sm">
          <option disabled selected>Filter timeline</option>
          <option>All Activities</option>
          <option>Meetups</option>
          <option>Calls</option>
        </select>
      </div>

      <div className="space-y-3">
        {activities.map((item) => (
          <div 
            key={item.id} 
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-50 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                {getIcon(item.icon_type)}
              </div>
              <div>
                <p className="text-sm">
                  <span className="font-bold text-gray-800">{item.type}</span> 
                  <span className="text-gray-500 ml-1">with {item.person}</span>
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;