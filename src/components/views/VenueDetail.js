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
    console.log("single venue data:",singleVenue)
    return (
        <>
            <div>
                {singleVenue.name}
                {singleVenue.id}

            </div>
        </>
    );
};

export default VenueDetail;
