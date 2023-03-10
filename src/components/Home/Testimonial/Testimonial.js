import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import img1 from '../../../image/new-in-data.jpg'
import img2 from '../../../image/Southcape_Textured_Crew_Neck_Sweater_Lister_1_10517205876766.jpg'
import img3 from '../../../image/tp-best-mens-hairstyles.jpg'
const Testimonial = () => {
    return (
        <div className='container mx-auto my-2'>
            <h1 className='text-left text-xl my-4 font-semibold'>What's my student say</h1>
            <div className=' mt-4 grid md:grid-cols-3 gap-2'>
                <div className=' p-10 rounded-lg shadow-2xl border-2 border-indigo-500 '>
                    <img className='h-12 w-12 rounded-full' src={img1} />
                    <h1 className='mb-2 text-xl text-left text-red-700'>Adam</h1>
                    <div className='flex my-2'>
                        <StarIcon className='text-orange-400 h-5'></StarIcon>
                        <StarIcon className='text-orange-400 h-5'></StarIcon>
                        <StarIcon className='text-orange-400 h-5'></StarIcon>
                        <StarIcon className='text-orange-400 h-5'></StarIcon>
                        <StarIcon className='text-orange-400 h-5'></StarIcon>
                    </div>
                    <p className='text-sm text-left'>i have been trying to get into Software /Web Development sector for a long time but
                        couldn't , because it is quite difficult to learn and maintain that consistency if you are learning
                        alone . </p>
                </div>
                <div className=' p-10 rounded-lg shadow-2xl border-2 border-indigo-500 '>
                    <img className='h-12 w-12 rounded-full' src={img2} />
                    <h1 className='mb-2 text-xl text-left text-red-700'>Alex</h1>
                    <div className='flex my-2'>
                        <StarIcon className='text-orange-400 h-5'></StarIcon>
                        <StarIcon className='text-orange-400 h-5'></StarIcon>
                        <StarIcon className='text-orange-400 h-5'></StarIcon>
                        <StarIcon className='text-orange-400 h-5'></StarIcon>
                        <StarIcon className='text-orange-400 h-5'></StarIcon>
                    </div>
                    <p className='text-sm text-left'>This course was a life-changer for me. I learned how to stay consistent, persistent and more importantly,
                        I learned "how to learn".</p>
                </div>
                <div className=' p-10 rounded-lg shadow-2xl border-2 border-indigo-500 '>
                    <img className='h-12 w-12 rounded-full' src={img3} />
                    <h1 className='mb-2 text-xl text-left text-red-700'>Robin</h1>
                    <div className='flex my-2'>
                        <StarIcon className='text-orange-400 h-5'></StarIcon>
                        <StarIcon className='text-orange-400 h-5'></StarIcon>
                        <StarIcon className='text-orange-400 h-5'></StarIcon>
                        <StarIcon className='text-orange-400 h-5'></StarIcon>
                        <StarIcon className='text-orange-400 h-5'></StarIcon>
                    </div>
                    <p className='text-sm text-left'>Your guideline was so strong that make me Very active and thats why i got hired so fast.</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;