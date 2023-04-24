import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardNews from '../Home/Home/HomeCardNews/CardNews';

const Catagory = () => {
    const {id} = useParams();
   const news = useLoaderData();
   console.log(news);
    return (
        <div>
            this is category  
            {news.length}
            {
                news.map(newsItem => <CardNews id={newsItem._id} newsItem={newsItem}></CardNews>)
            }
        </div>
    );
};

export default Catagory;