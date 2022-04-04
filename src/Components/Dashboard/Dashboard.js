import React from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'
const Dashboard = () => {

    const data = [
        {
            month: 'March',
            price: 400000,
            pv: 2400,
            amt: 2400,
        },
        {
            month: 'April',
            price: 300000,
            pv: 1398,
            amt: 2210,
        },
        {
            month: 'May',
            price: 200000,
            pv: 9800,
            amt: 2290,
        },
        {
            month: 'June',
            price: 278000,
            pv: 3908,
            amt: 2000,
        },
        {
            month: 'July',
            price: 189000,
            pv: 4800,
            amt: 2181,
        },
        {
            month: 'August',
            price: 239000,
            pv: 3800,
            amt: 2500,
        },
        {
            month: 'September',
            price: 349000,
            pv: 4300,
            amt: 2100,
        }
    ];
    return (
        <div className="grid md:grid-cols-2 gap-30 sm:grid-cols-1  lg:grid-cols-2  dashboard-main">

            <div >
                <h1 className="text-center">Month Wise Sell</h1>
                <LineChart  width={450} height={350} data={data}>
                    <Line  dataKey="price" stroke="#8884d8" />
                    <Line dataKey="month" ></Line>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis name="price" dataKey="price"></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div>
                <h1 className="text-center">Invest Vs Revenue</h1>

                <BarChart width={450} height={350} data={data}>
                    <XAxis dataKey="price" stroke="#8884d8" />
                    <YAxis dataKey="month" name="month" />
                    <CartesianGrid stroke="green" strokeDasharray="5 5" />
                    <Bar dataKey="month" fill="#8884d8" barSize={30} />
                    <Tooltip></Tooltip>
                </BarChart>



            </div>
            <div>
                <h1 className="text-center">Month Wise Sell</h1>
                <RadarChart outerRadius={90} width={450} height={350} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="price" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name="month" dataKey="month" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Month" dataKey="price" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    
                </RadarChart>


            </div>
            <div>
                <h1 className="text-center"> Revenue vs Investment</h1>
                <PieChart width={450} height={350}>
                    <Pie data={data} dataKey="price" nameKey="month" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="price" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip></Tooltip>
                </PieChart>

            </div>

        </div>
    );
};

export default Dashboard;