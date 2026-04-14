import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Stats = () => {
  const data = [
    { name: 'Text', value: 400 },
    { name: 'Call', value: 300 },
    { name: 'Video', value: 300 },
  ];


  const COLORS = ['#244D3F', '#0369A1', '#34D399'];

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <h1 className="text-3xl font-bold text-[#1A302B] mb-8">Friendship Analytics</h1>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-gray-500 font-medium mb-4">By Interaction Type</h3>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              
              <Tooltip 
                contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;