import React, {useState, useEffect} from 'react';
import {fetchSingleVenues} from "../../store/modules/venueSlice";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";


const VenueDetail = () => {
    const [userData, setUserData] = useState('');
    const dispatch = useDispatch();
    const {singleVenue} = useSelector(state => state.venues);
    let {id} = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchSingleVenues(id))
        }
    }, [dispatch, id]);

    useEffect(() => {
        const userData = localStorage.getItem('user-info');
        if (userData) {
            setUserData(JSON.parse(userData))
        }
    }, [])

    const bookedVenueBtn = (event) =>{
        event.preventDefault()
        alert("Venue is booked")
    }



    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:max-w-lg lg:self-end">
                        <div className="mt-4">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">{singleVenue && singleVenue.name}</h1>
                        </div>
                        <section aria-labelledby="information-heading" className="mt-4">
                            <h2 id="information-heading" className="sr-only">
                                Venue Information
                            </h2>
                            <div className="flex items-center">
                                <p className="text-lg text-gray-900 sm:text-xl">{singleVenue && singleVenue.price}$</p>
                                <div className="ml-4 border-l border-gray-300 pl-4">
                                    <h2 className="sr-only">Rating</h2>
                                    <div className="flex items-center">
                                        <div>
                                            <p className="sr-only">{singleVenue.rating} out of 5</p>
                                            <p>Rating: {singleVenue.rating} / 5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="font-medium text-gray-700 mt-2 mb-4 inline-flex gap-2">Venue Owner: {singleVenue && singleVenue.owner && singleVenue.owner.name ? singleVenue.owner.name : 'no name'} </p>
                            <div className="mt-2 space-y-3">
                                <p className="text-base text-gray-500">{singleVenue && singleVenue.description}</p>
                                <hr/>
                                <p className="text-base text-gray-500">{singleVenue && singleVenue.meta && singleVenue.meta.wifi ? "Wifi ✅" : "Wifi ❌"}</p>
                                <p className="text-base text-gray-500">{singleVenue && singleVenue.meta && singleVenue.meta.pets ? "Pets ✅" : "Pets ❌"}</p>
                                <p className="text-base text-gray-500">{singleVenue && singleVenue.meta && singleVenue.meta.breakfast ? "Breakfast ✅" : "Breakfast ❌"}</p>
                                <p className="text-base text-gray-500">{singleVenue && singleVenue.meta && singleVenue.meta.parking ? "Parking ✅" : "Parking ❌"}</p>
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
                            {singleVenue.id}
                            <form>
                                {userData && (
                                <div className="mt-10">
                                    <button
                                        type="submit"
                                        onClick={bookedVenueBtn}
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                    >
                                        Book {singleVenue.name}
                                    </button>
                                </div>
                                )}
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )};

export default VenueDetail;
