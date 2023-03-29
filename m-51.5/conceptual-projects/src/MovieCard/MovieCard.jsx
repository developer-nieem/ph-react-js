import React from 'react';

const MovieCard = ({movie,bookNow}) => {
    
    return (
        <div className='col-md-6 text-center  '>
            <div className='m-2 card'>
            <img className='w-75 m-auto' src={movie.poster} alt="" />
            <h2>{movie.movieName}</h2>
            <p> {movie.description}</p>
            <div className='d-flex justify-content-around'>
                <h5>watchTime: {movie.watchTime}</h5>
                <h5>imdb Rating {movie.imdbRating}</h5>
            </div>
            <button onClick={()=>bookNow(movie.watchTime)} className='btn btn-primary w-100 m-auto'>Book Now</button>
            </div>
        </div>
    );
};

export default MovieCard;