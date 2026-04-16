import { useState } from "react";
import { useOutletContext } from "react-router";
import { FaPhoneAlt, FaVideo, FaHandsHelping } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

const Timeline = () => {
  const { activities = [] } = useOutletContext() || {};
  const [filter, setFilter] = useState("all");

  const filteredActivities = filter === "all"
    ? activities
    : activities.filter((item) => item.icon_type === filter);

  const getIcon = (type) => {
    const iconType = type?.toLowerCase().trim();
    switch (iconType) {
      case "call": 
        return <FaPhoneAlt className="text-gray-500" size={16} />;
      case "text": 
        return <IoChatbubbleEllipsesSharp className="text-gray-500" size={18} />;
      case "video": 
        return <FaVideo className="text-gray-500" size={16} />;
      default: 
        return <FaPhoneAlt className="text-gray-500" size={16} />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl min-h-screen">
      <h1 className="text-3xl font-bold text-[#1A302B] mb-4">Timeline</h1>
      <div className="mb-6">
        <select
          className="select w-full max-w-xs bg-white text-sm border-gray-200"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Activities</option>
          <option value="call">Calls</option>
          <option value="text">Texts</option>
          <option value="video">Videos</option>
        </select>
      </div>

      <div className="space-y-3">
        {filteredActivities.length > 0 ? (
          filteredActivities.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-50"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                {getIcon(item.icon_type)}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">
                  {item.type} <span className="font-normal text-gray-500">with {item.person}</span>
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{item.date}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-100 text-gray-400 italic">
            No history yet. Start by checking in with a friend!
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;