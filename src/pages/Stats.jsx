import { useOutletContext } from "react-router";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Stats = () => {
  const { activities = [] } = useOutletContext() || {};

  const dynamicData = [
    { 
      name: 'Call', 
      count: activities.filter(a => a.type?.toLowerCase() === 'call').length,
      value: 1
    },
    { 
      name: 'Text', 
      count: activities.filter(a => a.type?.toLowerCase() === 'text').length,
      value: 1 
    },
    { 
      name: 'Video', 
      count: activities.filter(a => a.type?.toLowerCase() === 'video').length,
      value: 1 
    },
  ];

  const COLORS = ['#244D3F', '#7f36f5', '#35a165'];

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl min-h-[70vh]">
      <h1 className="text-3xl font-bold text-[#1A302B] mb-8">Friendship Analytics</h1>
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-gray-500 font-medium mb-4">By Interaction Type</h3>       
        <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dynamicData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {dynamicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value, name, props) => [`Count: ${props.payload.count}`, name]}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;