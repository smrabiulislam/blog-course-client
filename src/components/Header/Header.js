import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/Screenshot_46-removebg-preview.png';

const Header = () => {
    return (
        <div className='px-20 py-5 border-b-2 border-indigo-500'>
            <nav className=' flex justify-between items-center'>
                <div>
                    <Link className='text-lg font-semibold' to='/'><img className='h-12 ' src={logo} /></Link>
                </div>
                <div>
                    <Link className='text-indigo-500 px-5' to='/'>Home</Link>
                    <Link className='text-indigo-500 px-5' to='/courses'>Courses</Link>
                    <Link className='text-indigo-500 px-5' to='/blog'>Blog</Link>

                </div>
            </nav>
        </div>
    );
};

export default Header;