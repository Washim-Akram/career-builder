import React from 'react';
import { Area, AreaChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const assignmentMarks = [
        {
          name: 'Assignment 1',
          total: 60,
          score: 57,
        },
        {
            name: 'Assignment 2',
            total: 60,
            score: 58,
        },
        {
            name: 'Assignment 3',
            total: 60,
            score: 60,
        },
        {
            name: 'Assignment 4',
            total: 60,
            score: 60,
        },
        {
            name: 'Assignment 5',
            total: 60,
            score: 58,
        },
        {
            name: 'Assignment 6',
            total: 60,
            score: 58,
        },
        {
            name: 'Assignment 7',
            total: 60,
            score: 60,
        },

      ];
    return (
        <div className='my-container'>
            <h2 className='text-center font-bold text-blue-400 text-3xl'>Statistics Of Assignment Marks!</h2>
            <p className='text-center font-medium text-gray-400 mt-2 mb-4'>Using "AreaChart" !</p>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                data={assignmentMarks}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >

                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="score" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;