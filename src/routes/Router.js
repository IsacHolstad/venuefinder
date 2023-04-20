import React from "react";
import {Route, Routes} from "react-router-dom";
import SignUp from "../components/views/SignUp";
import SignIn from "../components/views/SignIn";
import PageNotFound from "../components/views/PageNotFound";
import Home from "../components/views/Home";

function Router () {
    return(
        <>
            <Routes>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </>
    )
}
export default Router;