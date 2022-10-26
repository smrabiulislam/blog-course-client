import React from 'react';
import Course from '../../layout/Course';
import Sidebar from '../../layout/Sidebar';

const Courses = () => {
    return (
        <div className='grid grid-cols-2 container mx-auto'>
            <Sidebar></Sidebar>
            <Course></Course>
        </div>
    );
};

export default Courses;