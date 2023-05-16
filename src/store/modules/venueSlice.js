import {createSlice} from "@reduxjs/toolkit";
import {setLoadingState} from "./loaderSlice";

const venueSlice = createSlice({
    name: 'venues',
    initialState: {
        venues: [],
        singleVenue: null, //may be [] instead of null in singleVenues
    },
    reducers: {
        SET_VENUE: (state, action) => {
            state.venues = action.payload;
        },
        SET_SINGLE_VENUE: (state, action) => {
            state.singleVenue = action.payload;
        }
    },
})

const {SET_VENUE} = venueSlice.actions;
const {SET_SINGLE_VENUE} = venueSlice.actions;
export default venueSlice.reducer;

export const fetchVenues = () => async (dispatch) => {
    dispatch(setLoadingState(true))
    try{
        const response = await fetch ("https://nf-api.onrender.com/api/v1/holidaze/venues");
        const data = await response.json();
        dispatch(SET_VENUE(data));
        dispatch(setLoadingState(false))
    }
    catch (e) {
        console.log(e);
        dispatch(setLoadingState(false))
    }
}

export const fetchSingleVenues = (id) => async dispatch => {
    dispatch(setLoadingState(true))
    let response;
    try{
        response = await fetch(`https://nf-api.onrender.com/api/v1/holidaze/venues/${id}`);
        console.log(response)
        const data = await response.json()
        //TODO error with response.json()

        dispatch(SET_SINGLE_VENUE(data));
        dispatch(setLoadingState(false))
    } catch (e) {
        console.log(e);
        dispatch(setLoadingState(false))
    }
}