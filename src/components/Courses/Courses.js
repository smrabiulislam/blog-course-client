import React from 'react';
import Course from '../../layout/Course';
import Sidebar from '../../layout/Sidebar';


const Courses = () => {
    return (
        <div className='grid md:grid-cols-4 container mx-auto my-4'>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div className='col-span-3'>
                <Course></Course>
            </div>

        </div>
    );
};

export default Courses;