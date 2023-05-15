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
    console.log("ID IS HERE",id)
    return (
        <>
           <div className="text-center text-2xl mt-24">
               <div className="bg-white">
                   <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                       <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                           <div className="flex flex-col-reverse">
                               <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                                   <div className="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
                                       <button id="tabs-1-tab-1"
                                               className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                               aria-controls="tabs-1-panel-1" role="tab" type="button">
                                           <span className="sr-only"> Angled view </span>
                                           <span className="absolute inset-0 overflow-hidden rounded-md"></span>
                                           <span
                                               className="ring-transparent pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                                               aria-hidden="true"></span>
                                       </button>
                                   </div>
                               </div>
                               <div className="aspect-h-1 aspect-w-1 w-full">
                                   <div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabIndex="0">
                                       <img
                                           src={singleVenue.media}
                                           alt={singleVenue.name}
                                           className="h-full w-full object-cover object-center sm:rounded-lg sm:w-64 sm:h-64"/>
                                   </div>
                               </div>
                           </div>
                           <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                               <h1 className="text-3xl font-bold tracking-tight text-gray-900">{singleVenue.name}</h1>
                               <div className="mt-3">
                                   <h2 className="sr-only">Product information</h2>
                                   <p className="text-3xl tracking-tight text-gray-900 line-through">{singleVenue.price}</p>
                               </div>
                               <div className="mt-3">
                                   rating
                               </div>
                               <div className="mt-6">
                                   <div className="space-y-6 text-base text-gray-700">
                                       <p>{singleVenue.description}</p>
                                   </div>
                               </div>
                               <form className="mt-6">
                                   <div className="sm:flex-col1 mt-10 flex">
                                       <button type="button"
                                               className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 py-3 px-8 text-base font-medium text-white focus:outline-none focus:ring-2  focus:ring-offset-2">
                                           Add to cart
                                       </button>
                                   </div>
                               </form>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </>

    )};

export default VenueDetail;
