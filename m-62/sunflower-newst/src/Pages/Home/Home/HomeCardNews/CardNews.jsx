import moment from 'moment';
import React from 'react';
import { FaBookmark, FaRegBookmark, FaRegEye, FaRegStar, FaShare, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const CardNews = ({ newsItem }) => {
    console.log(newsItem);
    const { _id, rating, title, author, thumbnail_url, image_url, details, total_view } = newsItem;
    return (
        <div>
            <div className="card my-3">
                <div className="card-header d-flex align-items-center">

                    <div>
                        <div><img className='rounded-circle' style={{ width: '40px' }} src={author.img} alt="" /></div>
                    </div>
                    <div className='flex-grow-1 ps-2'>
                        <h5 className='mb-0'>{author.name}</h5>
                        <p className='mb-0'>{moment(author.published_date).format('yyyy[-]mm[-]D',)}</p>
                    </div>
                    <div className='d-flex gap-2'>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <img className='img-fluid' src={image_url} alt="" />
                    <p className="card-text">{details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}....   <Link className='btn btn-link' to=''>Read more</Link> </>}</p>

                </div>
                <div className="card-footer text-body-secondary d-flex">
                    <div className='flex-grow-1'>
                        <Rating
                            placeholderRating={rating?.number}
                            emptySymbol={ <FaRegStar></FaRegStar> }
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                            readonly
                        />
                    </div>
                    <div>
                        <FaRegEye></FaRegEye>
                        {total_view}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardNews;