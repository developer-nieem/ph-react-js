import React, { useState } from 'react';
// const axios = require('axios');
import axios from 'axios';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';

const Xsios = () => {
    const [phone, setPhone] =useState([])
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data=> {
        const phoneData =  data.data.data;
       const price =  phoneData.map(phone => {
                const parts=  phone.slug.split('-');
                const phoneDetails = {
                    price: parseInt(parts[1]),
                    phoneName : phone.phone_name
                }
                return phoneDetails;

       });
       setPhone(price)
    })
    return (
        <div>
            <ComposedChart width={1000} height={300} data={phone}>
                <Bar dataKey='price'></Bar>
                <Line dataKey='price'></Line>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
                <XAxis dataKey='phoneName'></XAxis>
            <Area dataKey='price'></Area>
            <Scatter dataKey='price' fill='red'></Scatter>
            </ComposedChart>
        </div>
    );
};

export default Xsios;