import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {

    const data = [
        {
            name: 'Page A',
            price: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            price: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            price: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            price: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            price: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            price: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            price: 3490,
            pv: 4300,
            amt: 2100,
        }
    ];
    return (
        <div className="grid grid-cols-2 gap-10">

            <div >
                <h1 className="text-center">Month Wise Sell</h1>
                <LineChart width={600} height={300} data={data}>
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    <Line dataKey="name" ></Line>
                    <XAxis></XAxis>
                    <YAxis></YAxis>
                    <linearGradient></linearGradient>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div>
                <h1 className="text-center">Month Wise Sell</h1>

                <BarChart width={600} height={350} data={data}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
                </BarChart>
                );


            </div>
            <div>
                <h1 className="text-center">Month Wise Sell</h1>


            </div>
            <div>
                <h1 className="text-center">Month Wise Sell</h1>


            </div>

        </div>
    );
};

export default Dashboard;