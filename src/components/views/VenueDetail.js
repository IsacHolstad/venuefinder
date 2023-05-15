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
        console.log("id: ",id);
        if (id) {
            dispatch(fetchSingleVenues(id))
        }
    }, [dispatch, id])
    console.log("ID IS HERE",id)
    console.log("SINGLE VENUE DATA✅",singleVenue)
    return (
        <>
            <div className="mx-auto text-center">
                <h1 className="text-center mt-12">HELLO DATA BELOW:</h1>
                <div>HERE IS ID: {singleVenue.id}</div>
                <div>HERE IS NAME:{singleVenue.name}</div>
                <img src={singleVenue.media}/>
            </div>
        </>
    );
};

export default VenueDetail;
