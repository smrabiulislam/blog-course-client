import React, { useState } from 'react';

const Toogle = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
            <div className="flex">
                <label
                    htmlFor="default-toggle"
                    className="mt-2 inline-flex relative items-center cursor-pointer"
                >
                    <input
                        type="checkbox"
                        value=""
                        id="default-toggle"
                        className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-purple-600 rounded-full peer peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-600 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-500"></div>
                </label>
            </div>
        </div>
    );
};

export default Toogle;