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
    console.log("ID IS HERE",id)
    console.log("single venue data:",singleVenue)
    console.log(singleVenue.id)
    return (
        <>
            <h1 className="text-center mt-12">HELLO</h1>
        </>
    );
};

export default VenueDetail;
