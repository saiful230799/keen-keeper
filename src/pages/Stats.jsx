import { useOutletContext } from "react-router";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Stats = () => {
  const { activities = [] } = useOutletContext() || {};

  const dynamicData = [
    { name: 'Text', value: activities.filter(a => a.type === 'Text').length },
    { name: 'Call', value: activities.filter(a => a.type === 'Call').length },
    { name: 'Video', value: activities.filter(a => a.type === 'Video').length },
  ];

  const hasData = dynamicData.some(item => item.value > 0);

  const COLORS = ['#244D3F', '#0369A1', '#34D399'];

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl min-h-[70vh]">
      <h1 className="text-3xl font-bold text-[#1A302B] mb-8">Friendship Analytics</h1>
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-gray-500 font-medium mb-4">By Interaction Type</h3>       
        <div className="h-[350px] w-full">
          {hasData ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dynamicData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {dynamicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
                  }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 italic">
              No interactions recorded yet. Click Call/Text/Video to see stats!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;