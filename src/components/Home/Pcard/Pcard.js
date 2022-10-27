import React, { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';


const Pcard = () => {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('https://blog-course-server-assignment-10.vercel.app/course')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div className='container mx-auto'>
            <h1 className='text-left text-xl font-semibold my-4'>Our Courses</h1>
            <div className='grid md:grid-cols-3 gap-2 '>
                {
                    course.map(course => <div className='p-10 rounded-lg shadow-2xl border-2 border-indigo-500'
                        key={course.id}>
                        <div>
                            <img className='h-52  ' src={course.picture} />
                            <h1 className='mb-2 text-xl text-left text-red-700'>{course.name}</h1>
                            <p className='text-sm text-left'>{course.about.slice(0, 50)}</p>
                            <h1 className='text-2xl text-left mt-2'>${course.price}</h1>
                        </div>
                        <div className='flex justify-between mt-8'>
                            <div className='flex my-2'>
                                <StarIcon className='text-orange-400 h-5'></StarIcon>
                                <StarIcon className='text-orange-400 h-5'></StarIcon>
                                <StarIcon className='text-orange-400 h-5'></StarIcon>
                                <StarIcon className='text-orange-400 h-5'></StarIcon>
                                <StarIcon className='text-orange-400 h-5'></StarIcon>
                            </div>
                            <div>
                                <Link to={`/course/${course.id}`}><button className='mx-2 bg-indigo-600 hover:bg-violet-600 py-2 px-2 text-white rounded-md'>View Course</button></Link>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Pcard;