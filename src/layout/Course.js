import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData()
    console.log(course)
    return (
        <div className='grid md:grid-cols-3 gap-2'>
            {
                course.map(coursec => <div className='p-10 rounded-lg shadow-2xl border-2 border-indigo-500'
                    key={coursec.id}>
                    <div>
                        <img className='h-52  ' src={coursec.picture} />
                        <h1 className='mb-2 text-xl text-left text-red-700'>{coursec.name}</h1>
                        <p className='text-sm text-left'>{coursec.about.slice(0, 200)}</p>
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
                            <Link to={`/course/${coursec.id}`}><button className='mx-2 bg-indigo-600 hover:bg-violet-600 py-2 px-4 text-white rounded-md'>View Course</button></Link>
                        </div>
                    </div>
                </div>
                )
            }

        </div>
    );
};

export default Course;