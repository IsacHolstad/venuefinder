import React from 'react';
import {fetchSingleVenues} from "../../store/modules/venueSlice";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";


const VenueDetail = () => {
    const dispatch = useDispatch();
    const {singleVenue} = useSelector(state => state.venues);
    let {id} = useParams();
    useEffect(() => {
        console.log(id)
        if (id) {
            dispatch(fetchSingleVenues(id))
        }
    }, [dispatch, id])
    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:max-w-lg lg:self-end">
                        <div className="mt-4">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{singleVenue.name}</h1>
                        </div>
                        <section aria-labelledby="information-heading" className="mt-4">
                            <h2 id="information-heading" className="sr-only">
                                Venue Information
                            </h2>
                            <div className="flex items-center">
                                <p className="text-lg text-gray-900 sm:text-xl">{singleVenue.price}$</p>
                                <div className="ml-4 border-l border-gray-300 pl-4">
                                    <h2 className="sr-only">Rating</h2>
                                    <div className="flex items-center">
                                        <div>
                                            <p className="sr-only">{singleVenue.rating} out of 10</p>
                                            <p>Rating: {singleVenue.rating} / 10</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 space-y-6">
                                <p className="text-base text-gray-500">{singleVenue.description}</p>
                                <p className="text-gray-500">MaxGuests: {singleVenue.maxGuests}</p>
                            </div>
                        </section>
                    </div>
                    <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                            <img src={singleVenue.media} alt={singleVenue.name} className="h-full w-full object-cover object-center" />
                        </div>
                    </div>
                    <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                        <section aria-labelledby="options-heading">
                            <p className="text-gray-500">Posted: {singleVenue.created}</p>
                            <p className="text-gray-500">{singleVenue.name}</p>
                            <form>
                                <div className="mt-10">
                                    <button
                                        type="submit"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                    >
                                        Book {singleVenue.name}
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>

        </>

    )};

export default VenueDetail;
