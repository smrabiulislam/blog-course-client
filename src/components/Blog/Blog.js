import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='mt-20 grid md:grid-cols-3 sm:grid-cols-1'>
                <div className='md:mx-5 sm:m-5 p-10 rounded-lg shadow-2xl border-2 border-indigo-500 '>
                    <h1 className='mb-2 text-xl text-left text-red-700'>What is cors?</h1>
                    <p className='text-sm text-left'>Cross-origin resource sharing (CORS) is a browser security feature that
                        restricts cross-origin HTTP requests that are initiated from scripts running in the browser.
                        If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS
                        support.</p>
                </div>
                <div className='md:mx-5 sm:m-5 p-10 rounded-lg shadow-2xl border-2 border-indigo-500 '>
                    <h1 className='mb-2 text-xl text-left text-red-700'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                    <p className='text-sm text-left'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI
                        libraries to authenticate users to your app. It supports authentication using passwords, phone numbers,
                        popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                </div>
                <div className='md:mx-5 sm:m-5 p-10 rounded-lg shadow-2xl border-2 border-indigo-500 '>
                    <h1 className='mb-2 text-xl text-left text-red-700'>How does the private route work?</h1>
                    <p className='text-sm text-left'>The react private route component renders child components ( children ) if the user is
                        logged in. If not logged in the user is redirected to the /login page with the return url passed in the
                        location state property.</p>
                </div>
                <div className='md:mx-5 sm:m-5 p-10 rounded-lg shadow-2xl border-2 border-indigo-500 '>
                    <h1 className='mb-2 text-xl text-left text-red-700'>What is Node? How does Node work?</h1>
                    <p className='text-sm text-left'>It is a used as backend service where javascript works on the server-side of the application.
                        This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript
                        code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;