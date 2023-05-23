import React from 'react';
import {Link} from "react-router-dom";

const UserVenues = () => {


    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">You're Venues</h2>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            <div className="group">
                                <div className="aspect-h-1 aspect-w-1 mb-4 w-full overflow-hidden xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src=""
                                        alt="venue img"
                                        className="h-full w-full object-cover object-center "
                                    />
                                </div>
                                <div className="mt-2">
                                    <h3 className="text-sm text-gray-800">"name"</h3>
                                    <h3 className="text-sm text-gray-500 mb-4">"price"$</h3>
                                </div>
                                    <Link to={`venueDetail/`} className="rounded-md mr-3  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Edit Venue
                                    </Link>
                                    <Link to={`venueDetail/`} className="rounded-md ml-3  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-red-600 hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                                        Delate Venue
                                    </Link>
                            </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default UserVenues;
