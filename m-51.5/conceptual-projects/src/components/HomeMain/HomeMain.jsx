import React, { useEffect, useState } from 'react';
import MovieCard from '../../MovieCard/MovieCard';

const HomeMain = ({bookNow}) => {
const [movies, setMovies] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setMovies(data))
    },[])

    return (
        <div className='row'>
           {
            movies.map(movie => <MovieCard bookNow={bookNow}  movie={movie}></MovieCard>)
           }
        </div>
    );
};

export default HomeMain;