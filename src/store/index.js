import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';
import venueSlice from "./modules/venueSlice";

const reducer = combineReducers({
    data: venueSlice,

    }
)
const index = configureStore({
    reducer,
})
export default index