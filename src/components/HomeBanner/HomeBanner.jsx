const HomeBanner = () => {
  const statCards = [
    { value: 12, title: "Total Friends" },
    { value: 3, title: "On Track" },
    { value: 6, title: "Need Attention" },
    { value: 12, title: "Interactions This Month" },
  ];

  return (
    <div className="rounded-3xl p-4 md:p-16 text-center text-[#244D3F] mb-10 overflow-hidden relative">
      
      <div className="relative z-10 mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight lg:max-w-5xl xl:max-w-full mx-auto">
        Friends to keep close in your life
        </h1>
        
        <p className="text-[#64748B] text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed opacity-90">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        
        <button className="btn bg-[#1A302B] hover:bg-[#244D3F] text-white shadow btn-lg px-7 py-7 gap-3 rounded-xl font-bold transition-all shadow-md">
          <span className="text-2xl font-light">+</span> Add a Friend
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0 relative z-10">
        {statCards.map((card, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl flex flex-col items-center justify-center shadow-md transform hover:scale-105 transition-transform">

            <h3 className="text-5xl font-extrabold text-[#1A302B] mb-3">
              {card.value}
            </h3>
            <p className="text-[#1A302B] font-semibold text-lg opacity-80">
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;