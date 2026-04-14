import { useEffect, useState } from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import FriendCard from "../components/FriendCard/FriendCard";

const Home = () => {
  const [friends, setFriends] = useState([]);


  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">

      <HomeBanner />

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-[#1A302B] mb-8 px-2">Your Friends</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;