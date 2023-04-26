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
        if (id) {
            dispatch(fetchSingleVenues(id))
        }
    }, [dispatch, id])
    console.log(id)
    return (
        <>
            <h1 className="text-3xl text-center mt-12">Venue Detail Page</h1>
        </>
    );
};

export default VenueDetail;
