import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { 
  FaPhoneAlt, 
  FaVideo, 
  FaRegEdit, 
  FaTrashAlt, 
  FaArchive 
} from "react-icons/fa";
import { IoChatbubbleEllipsesSharp, IoNotificationsOffOutline } from "react-icons/io5";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find(f => f.id === parseInt(id));
        setFriend(found);
      });
  }, [id]);

  if (!friend) return <div className="text-center p-20 font-bold">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        <div className="md:col-span-4 space-y-4">
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100">
            <img src={friend.image} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-50" />
            <h2 className="text-2xl font-bold">{friend.name}</h2>
            <div className="flex justify-center gap-2 my-3">
              <span className="bg-[#EF4444] text-white text-xs px-3 py-1 rounded-full font-bold">{friend.status}</span>
              <span className="bg-[#CBFADB] text-[#244D3F] text-xs px-3 py-1 rounded-full font-bold uppercase">{friend.category[0]}</span>
            </div>
            <p className="italic text-gray-500 mb-2">"{friend.note}"</p>
            <p className="text-sm text-gray-400">Preferred: {friend.preferred}</p>
          </div>

          <div className="space-y-2">
            <button className="w-full py-3 bg-white rounded-xl shadow flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
              <IoNotificationsOffOutline size={18}/> Snooze 2 Weeks
            </button>
            <button className="w-full py-3 bg-white rounded-xl shadow flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
              <FaArchive size={16}/> Archive
            </button>
            <button className="w-full py-3 bg-white rounded-xl shadow text-red-500 flex items-center justify-center gap-2 hover:bg-red-50 transition-colors">
              <FaTrashAlt size={16}/> Delete
            </button>
          </div>
        </div>

        <div className="md:col-span-8 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100">
              <p className="text-3xl font-bold text-[#1A302B]">{friend.days_since_contact}</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100">
              <p className="text-3xl font-bold text-[#1A302B]">{friend.goal_days}</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-gray-100">
              <p className="text-xl font-bold text-[#1A302B]">{friend.next_due}</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-gray-800">Relationship Goal</h3>
              <p className="text-gray-500 mt-1">Connect every <span className="font-bold text-black">{friend.goal_days} days</span></p>
            </div>
            <button className="btn btn-ghost btn-sm border bg-gray-50 flex gap-2">
              <FaRegEdit size={14}/> Edit
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <FaPhoneAlt size={22}/> <span className="text-sm font-medium">Call</span>
              </button>
              <button className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <IoChatbubbleEllipsesSharp size={24}/> <span className="text-sm font-medium">Text</span>
              </button>
              <button className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <FaVideo size={22}/> <span className="text-sm font-medium">Video</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FriendDetails;