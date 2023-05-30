import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import React, {useEffect, useMemo, useState} from "react";
import {fetchVenues} from "../../store/modules/venueSlice";
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";

function Home()   {
    const dispatch = useDispatch();
    const {venues} = useSelector(state => state.venues);
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(fetchVenues());
    }, [dispatch]);

    const memoVenue = useMemo(() => venues, [venues]);

    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Venues</h2>
                    <div className="w-full max-w-lg lg:max-w-xs flex-col mx-auto mt-4 mb-4 block">
                        <label htmlFor="search" className="sr-only">
                            Search
                        </label>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <input
                                id="search"
                                name="search"
                                onChange={(e) => setSearch(e.target.value)}
                                className="block  w-full lg:mr-12 rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mx-auto lg:w-[400px]"
                                placeholder="Search for venues"
                                type="search"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {memoVenue.filter((item) => {
                            return search.toLowerCase() === '' ? item : item.name.
                                toLowerCase().includes(search)
                        }).map((venue) => (
                            <div key={venue.id} className="group">
                                <div className="aspect-h-1 aspect-w-1 mb-4 w-full overflow-hidden xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={venue.media}
                                        alt={venue.name}
                                        className="h-full w-full object-cover object-center "
                                    />
                                </div>
                                <div className="mt-2">
                                    <h3 className="text-sm text-gray-800">{venue.name}</h3>
                                    <h3 className="text-sm text-gray-500 mb-4">{venue.price}$</h3>
                                </div>
                                <Link to={`venueDetail/${venue.id}`} className="rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    View Venue
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
