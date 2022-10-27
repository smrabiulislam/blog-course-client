import { Transition } from '@headlessui/react';
import React, { useState } from 'react';
import { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Firebase/Authprovider';
import logo from '../../image/Screenshot_46-removebg-preview.png';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const userLogOut = () => {
        logOut()
            .then(() => {
                console.log('userLogOut');
            })
    }
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='sticky top-0 bg-slate-50 z-40 py-5 border-b-2 border-indigo-500'>
            <nav className="">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-around items-center w-full ">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex-shrink-0">
                                <Link className='text-lg font-semibold' to='/'><img className='h-16 ' src={logo} /></Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link className='text-indigo-500 px-5' to='/'>Home</Link>
                                    <Link className='text-indigo-500 px-5' to='/courses'>Courses</Link>
                                    <Link className='text-indigo-500 px-5' to='/blog'>Blog</Link>
                                    <Link className='text-indigo-500 px-5' to='/faq'>Faq</Link>
                                </div>
                            </div>
                            <div className='flex  gap-2'>
                                <div className='mt-2'>
                                    {
                                        user?.uid ? <Link onClick={userLogOut}

                                            className=" mx-2 bg-indigo-600 hover:bg-violet-600 py-2 px-4 text-white rounded-md"
                                        >
                                            Logout
                                        </Link> :
                                            <>
                                                <Link to='/signin'><button className='mx-2 bg-indigo-600 hover:bg-violet-600 py-2 px-4 text-white rounded-md'>Sign In</button></Link>
                                                <Link to='/signup'><button className='mx-2 bg-indigo-600 hover:bg-violet-600 py-2 px-4 text-white rounded-md'>Sign Up</button></Link>
                                            </>
                                    }
                                </div>
                                <div className="gap-2">
                                    {user?.uid && (
                                        <div>
                                            {user?.photoURL ? (
                                                <img
                                                    className="w-10 h-10 text-white rounded-md"
                                                    alt="user icon"
                                                    title={user?.displayName}
                                                    src={user.photoURL}
                                                />
                                            ) : (
                                                <FaUser
                                                    title={user?.displayName}
                                                    className="w-10 h-9 text-white rounded-md"
                                                ></FaUser>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link className="hover:bg-gray-700 text-indigo-500 block px-3 py-2 rounded-md text-base font-medium" to='/'>Home</Link>
                                <Link className="hover:bg-gray-700 text-indigo-500 block px-3 py-2 rounded-md text-base font-medium" to='/courses'>Courses</Link>
                                <Link className="hover:bg-gray-700 text-indigo-500 block px-3 py-2 rounded-md text-base font-medium" to='/blog'>Blog</Link>
                                <Link className="hover:bg-gray-700 text-indigo-500 block px-3 py-2 rounded-md text-base font-medium" to='/faq'>Faq</Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
};

export default Header;