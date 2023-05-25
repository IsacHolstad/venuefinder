import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setLoadingState} from "../../store/modules/loaderSlice";

const UserVenues = () => {
    const [userData, setUserData] = useState('');
    const [userVenue, setUserVenue] = useState([])
    const dispatch = useDispatch()




    useEffect(() => {
        const userData = localStorage.getItem('user-info');
        if (userData) {
            setUserData(JSON.parse(userData))
        }
    }, [])

    const userName = userData.name
    const userKey = userData.accessToken
    console.log(userData)
    console.log(userName)
    console.log("here is key",userKey)

    useEffect(() => {
        fetchUserVenues()
    }, [])



    const fetchUserVenues = async () =>  {
        dispatch(setLoadingState(true))
        try {
            let response = await fetch(`https://nf-api.onrender.com/api/v1/holidaze/profiles/${userName}/venues`, {
                method: "GET",
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${userKey}`

                },
            });
            const jsonData = await response.json();
            setUserVenue(jsonData)
            dispatch(setLoadingState(false))
            console.log("here is user venue response",jsonData)
            console.log("set user venue",setUserVenue)
        }catch (error) {
            console.log(error)
            dispatch(setLoadingState(false))
        }
    }


    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">You're Venues</h2>
                    <div className="w-full max-w-lg lg:max-w-xs flex-col mx-auto mt-4 mb-4 block">
                    </div>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-8">
                        {userVenue.map((item) => (
                             <div key={item.id} className="group">
                                 <div
                                     className="aspect-h-1 aspect-w-1 mb-4 w-full overflow-hidden xl:aspect-h-8 xl:aspect-w-7">
                                     <img
                                         src={item.media}
                                         alt={item.name}
                                         className="h-full w-full object-cover object-center border-1 border-gray-500 "
                                     />
                                 </div>
                                 <div className="mt-2">
                                     <h3 className="text-sm text-gray-800">{item.name}</h3>
                                     <h3 className="text-sm text-gray-500 mb-4">{item.price}$</h3>
                                 </div>
                                 <Link to="/edituservenue">
                                     <input
                                         type="button"
                                         value="Edit Venue"
                                         className="rounded-md mr-3  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                     />
                                 </Link>
                                 <input
                                     type="button"
                                     value="Delete Venue"
                                     className="rounded-md ml-3  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-red-600 hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                 />
                             </div>
                         ))}
                    </div>

                </div>
            </div>
        </>
    );
};

export default UserVenues;
