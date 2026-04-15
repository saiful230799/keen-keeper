import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { FaPhoneAlt, FaVideo, FaHandsHelping } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

const Timeline = () => {
  const { activities = [] } = useOutletContext() || {};
  const [jsonActivities, setJsonActivities] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const entries = data.map((friend) => ({
          id: `json-${friend.id}`, 
          type: friend.preferred || "Call",
          icon_type: (friend.preferred || "call").toLowerCase().trim(),
          person: friend.name,
          date: friend.next_due_date || "N/A",
        }));
        setJsonActivities(entries);
      })
      .catch(err => console.error("Error fetching friends:", err));
  }, []);

  const allActivities = [...activities, ...jsonActivities];

  const filteredActivities = filter === "all"
    ? allActivities
    : allActivities.filter((item) => item.icon_type === filter);

  const getIcon = (type) => {
    const iconType = type?.toLowerCase().trim();
    switch (iconType) {
      case "call": 
        return <FaPhoneAlt className="text-gray-500" size={16} />;
      case "text": 
        return <IoChatbubbleEllipsesSharp className="text-gray-500" size={18} />;
      case "video": 
        return <FaVideo className="text-gray-500" size={16} />;
      case "meet": 
      case "meetup":
        return <FaHandsHelping className="text-orange-400" size={20} />;
      default: 
        return <FaPhoneAlt className="text-gray-500" size={16} />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl min-h-screen">
      <h1 className="text-3xl font-bold text-[#1A302B] mb-4">Timeline</h1>
      
      <div className="mb-6">
        <select
          className="select select-bordered w-full max-w-xs bg-white text-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Filter Timeline</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>

      <div className="space-y-3">
        {filteredActivities.length > 0 ? (
          filteredActivities.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-50 hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                {getIcon(item.icon_type)}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">
                  {item.type}{" "}
                  <span className="font-normal text-gray-500">with {item.person}</span>
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{item.date}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-400">No activities found.</div>
        )}
      </div>
    </div>
  );
};

export default Timeline;