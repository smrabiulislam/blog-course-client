import { FaceFrownIcon } from '@heroicons/react/24/solid';
import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex flex-col containar mx-auto w-1/2 my-3 p-10 rounded-lg border-2 border-indigo-500'>
            <div><FaceFrownIcon className='tect-center mx-auto text-orange-400 h-12'></FaceFrownIcon></div>
            <div><h2> Here is no data. So we are really sorry.</h2></div>
        </div>
    );
};

export default ErrorPage;