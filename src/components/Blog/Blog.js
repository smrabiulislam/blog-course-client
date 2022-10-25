import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='mt-20 grid md:grid-cols-3 sm:grid-cols-1'>
                <div className='md:mx-5 sm:m-5 p-10 rounded-lg shadow-2xl border-2 border-indigo-500 '>
                    <h1 className='mb-2 text-xl text-left text-red-700'>What is the purpose of react?</h1>
                    <p className='text-sm text-left'>React's primary role in an application is to handle the view layer of
                        that application just like the V in a model-view-controller (MVC) pattern by providing
                        the best and most efficient rendering execution.Rather than dealing with the whole
                        user interface as a single unit, React.</p>
                </div>
                <div className='md:mx-5 sm:m-5 p-10 rounded-lg shadow-2xl border-2 border-indigo-500 '>
                    <h1 className='mb-2 text-xl text-left text-red-700'>How does context api works?</h1>
                    <p className='text-sm text-left'>React's context allows you to share information to any component,
                        by storing it in a central place and allowing access to any component that requests it (usually you
                        are only able to pass data from parent to child via props).</p>
                </div>
                <div className='md:mx-5 sm:m-5 p-10 rounded-lg shadow-2xl border-2 border-indigo-500 '>
                    <h1 className='mb-2 text-xl text-left text-red-700'>React useRef Hook</h1>
                    <p className='text-sm text-left'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that
                        does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;