import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('https://blog-course-server-assignment-10.vercel.app/course')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div className='p-10 rounded-lg shadow-2xl border-2 border-indigo-500 mx-2'>
            <h2>Course Category: {course.length}</h2>
            <hr></hr>
            <div className='text-left  '>
                {
                    course.map(course => <p
                        className='p-2 my-2 rounded-lg shadow-2xl border-2 border-indigo-500 mx-2'
                        key={course.id}>
                        <Link className='' to={`/course/${course.id}`}>{course.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Sidebar;