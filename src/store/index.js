import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';
import venueSlice from "./modules/venueSlice";
import loaderSlice from "./modules/loaderSlice";

const reducer = combineReducers({
    venues: venueSlice,
    loader: loaderSlice

    }
)
const index = configureStore({
    reducer,
})
export default index;
