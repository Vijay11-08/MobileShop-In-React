import React from "react";
import { Card } from "../../components/UiComponents";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4500 },
  { name: "May", sales: 4800 },
  { name: "Jun", sales: 5200 },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      
      <div className="grid grid-cols-3 gap-6">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Total Users</h2>
            <p className="text-2xl font-bold">1,234</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Total Orders</h2>
            <p className="text-2xl font-bold">5,678</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Revenue</h2>
            <p className="text-2xl font-bold">$120,456</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Sales Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
