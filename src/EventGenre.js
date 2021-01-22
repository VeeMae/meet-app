import React, { useEffect, useState } from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Legend
} from 'recharts';

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(() => getData());
    }, [events]);

    const getData = () => {
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
        const data = genres.map((genre) => {
            const value = events.filter(({ summary }) => summary.split(' ').includes(genre)).length;
            return { name: genre, value };
        })
    return data;
    };

    const colors = ['#6D6875', '#B5838D', '#FFB4A2', '#2A2E45', '#81A094']

    return (
        <ResponsiveContainer height={400}>
            <PieChart>
                <Pie data={data} cx="45%" cy="50%" labelLine={false} legendType="square" outerRadius={80} fill="#8884d8" datakey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                    {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} name={entry.name}/>)
                    }
                </Pie>
                <Legend layout="horizontal" align="center" verticalAlign="top">

                </Legend>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default EventGenre;