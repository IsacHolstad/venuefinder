import React from "react";
import {Route, Routes} from "react-router-dom";
import SignUp from "../components/views/SignUp";
import SignIn from "../components/views/SignIn";

function Router () {
    return(
        <>
            <Routes>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/signin" element={<SignIn/>}/>
            </Routes>
        </>
    )
}
export default Router;