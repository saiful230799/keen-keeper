import { useNavigate } from "react-router";

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();

  const statusColors = {
    "Overdue": "bg-red-500 text-white",
    "Almost Due": "bg-orange-400 text-white",
    "On-Track": "bg-[#1A302B] text-white",
  };

  return (
    <div 
      onClick={() => navigate(`/friend/${friend.id}`)} 
      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all cursor-pointer transform hover:scale-[1.02]"
    >
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-gray-100">
        <img src={friend.image} alt={friend.name} className="w-full h-full object-cover" />
      </div>

      <h3 className="text-xl font-bold text-gray-800">{friend.name}</h3>
      <p className="text-gray-400 text-sm mb-3">{friend.last_contact}</p>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {friend.category.map((cat, index) => (
          <span key={index} className="bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {cat}
          </span>
        ))}
      </div>

      <div className={`text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-tighter ${statusColors[friend.status] || "bg-gray-200"}`}>
        {friend.status}
      </div>
    </div>
  );
};

export default FriendCard;