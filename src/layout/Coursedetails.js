import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Coursedetails = () => {
    const course = useLoaderData()
    console.log(course)
    return (
        <div className=' '>
            <div className='grid md:grid-cols-4 md:px-20 py-20 gap-5'>
                <div className="col-span-3 p-10 rounded-lg shadow-2xl border-2 border-indigo-500 mx-2">
                    <div className='grid md:grid-cols-2 my-5'>
                        <div className='col-span-1'>
                            <figure><img className=' h-68' src={course?.picture} alt="car!" /></figure>
                        </div>
                        <div className="pl-4">

                            <h2 className="text-2xl text-left text-semibold">{course?.name}</h2>
                            <hr className='my-4 ' />
                            <p className='text-left'>{course?.about}</p>

                        </div>
                    </div>
                </div>

                <div>
                    <div className="p-10 rounded-lg shadow-2xl border-2 border-indigo-500 mx-2">

                        <div className="">
                            <h2 className="text-2xl mb-4">{course?.name}</h2>
                            <hr className='mb-4 ' />
                            <p className='text-xl text-left my-1'>Duration: {course.time}</p>
                            <p className='text-xl text-left my-1'>Total Enroll: {course.student}</p>
                            <p className='text-xl text-left my-1'>Price: ${course.price}</p>
                            <Link to='/' className="card-actions justify-start mt-10">
                                <button className="btn btn-primary w-full  my-1 bg-indigo-600 hover:bg-violet-600 py-2 px-4 text-white rounded-md">Download Outline</button>
                            </Link>

                            <Link to='/checkout' className="card-actions">
                                <button className="btn btn-primary w-full  my-1 bg-indigo-600 hover:bg-violet-600 py-2 px-4 text-white rounded-md">Enroll now</button>
                            </Link>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Coursedetails;