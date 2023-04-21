import {createSlice} from "@reduxjs/toolkit";

const venueSlice = createSlice({
    name: 'venues',
    initialState: {
        venues: [],
        singleVenue: [],
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

export const fetchVenues = () => async (dispatch) => {
    //dispatch loading
    try{
        const response = await fetch ('https://nf-api.onrender.com/api/v1/holidaze/venues');
        console.log(response)
    }
    catch (e) {
        console.log(e)
    }
}
fetchVenues()