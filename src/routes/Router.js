import React from "react";
import {Route, Routes} from "react-router-dom";
import SignUp from "../components/views/SignUp";
import SignIn from "../components/views/SignIn";
import PageNotFound from "../components/views/PageNotFound";
import Home from "../components/views/Home";
import VenueDetail from "../components/views/VenueDetail";
import CreateVenue from "../components/views/CreateVenue";
import ProfilePage from "../components/views/ProfilePage";
import EditAvatar from "../components/views/EditAvatar";
import UserVenues from "../components/views/UserVenues";
import EditUserVenue from "../components/views/EditUserVenue";

function Router () {
    return(
        <>
            <Routes>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/createvenue" element={<CreateVenue/>}/>
                <Route path="/profilepage" element={<ProfilePage/>}/>
                <Route path="/venueDetail/:id" element={<VenueDetail/>}/>
                <Route path="/editavatar" element={<EditAvatar/>}/>
                <Route path="/edituservenue" element={<EditUserVenue/>}/>
                <Route path="/uservenues" element={<UserVenues/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </>
    )
}
export default Router;