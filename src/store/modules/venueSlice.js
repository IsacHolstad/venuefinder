import {createSlice} from "@reduxjs/toolkit";

const venueSlice = createSlice({
    name: 'venues',
    initialState: {
        data: [],
        singleVenue: [], //may be [] instead of null in singleVenues
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
    //dispatch loading
    try{
        const response = await fetch ('https://nf-api.onrender.com/api/v1/holidaze/venues');
        console.log(response)
        const data = await response.json();
        console.log("HERE IS API DATA", data)
        dispatch(SET_VENUE(data))
    }
    catch (e) {
        console.log(e)
    }
}

export const fetchSingleVenues = (id) => async dispatch => {
    dispatch(SET_SINGLE_VENUE({}));
    //dispatch loading
    let response;
    try{
        response = await (`https://nf-api.onrender.com/api/v1/holidaze/venues/${id}`);
        const data = await response.json();
        dispatch(SET_SINGLE_VENUE(data))
    } catch (e) {
        console.log(e)
    }

}