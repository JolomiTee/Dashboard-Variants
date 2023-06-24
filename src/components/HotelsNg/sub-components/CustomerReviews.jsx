import React from 'react'
import { HotelReviews } from '../../../assets/HotelsNg/data'
import Rating from '../../../assets/HotelsNg/icons/Rating.svg'

const CustomerReviews = () => {
    return (
        <div className="grid gap-3 h-fit">
            <div className='h-fit'>
                <h4 className='text-[22px] text-hotels-letter-black1'>Customer reviews</h4>
            </div>
            {
                HotelReviews.map((review, index) => (
                    <div key={index} className="grid gap-2 w-full h-fit font-visuelt-pro">
                        <div className="top flex gap-5 w-full">
                            <div className='profilePictire rounded-full'>
                                <img src={review.Customer} alt={review.Name} />
                            </div>
                            <div className="profileInfo w-full">
                                <div className="flex justify-between">
                                    <p className='text-hotels-letter-black-1 font-bold text-16'>{review.Name}</p>
                                    <div className='flex gap-3 items-center'>
                                        <p className='text-hotels-grey text-16 leading-[0px]'>
                                            {review.Rating}
                                        </p>
                                        <img className='h-5 w-5' src={Rating} alt={`${review.Rating}/5.0 rating`} />

                                    </div>
                                </div>
                                <p className='text-hotels-grey text-14'>{review.Posted}</p>
                            </div>
                        </div>
                        <div className="bottom">
                            {review.Review}
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default CustomerReviews