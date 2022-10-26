import React from 'react';

const Checkout = () => {
    return (

        <div className="my-5 w-1/2 container mx-auto p-10 rounded-lg shadow-2xl border-2 border-indigo-500">
            <h1 className='text-center text-xl'>Checkout</h1>
            <form action="#" method="POST">
                <div className="">
                    <label htmlFor="first-name" className="block text-sm py-2 text-left font-medium text-gray-700">
                        First name
                    </label>
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full border-2 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <label htmlFor="last-name" className="block text-sm py-2 text-left font-medium text-gray-700">
                        Last name
                    </label>
                    <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full border-2 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <label htmlFor="email-address" className="block text-sm py-2 text-left font-medium text-gray-700">
                        Email address
                    </label>
                    <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full border-2 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <label htmlFor="country" className="block text-sm py-2 text-left font-medium text-gray-700">
                        Country
                    </label>
                    <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>
                    <label htmlFor="street-address" className="block text-sm py-2 text-left font-medium text-gray-700">
                        Street address
                    </label>
                    <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 block w-full border-2 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <label htmlFor="city" className="block text-sm py-2 text-left font-medium text-gray-700">
                        City
                    </label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 block w-full border-2 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <label htmlFor="region" className="block text-sm py-2 text-left font-medium text-gray-700">
                        State / Province
                    </label>
                    <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 block w-full border-2 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <label htmlFor="postal-code" className="block text-sm py-2 text-left font-medium text-gray-700">
                        ZIP / Postal code
                    </label>
                    <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 block w-full rounded-md border-2 p-2 border-gray-300  sm:text-sm"
                    />
                    <button
                        type="submit"
                        className=" w-full rounded-md mt-4 border border-transparent bg-indigo-600 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Checkout
                    </button>
                </div>
            </form>
        </div>

    );
};

export default Checkout;