import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {setLoadingState} from "../../store/modules/loaderSlice";

const ViewBookings = () => {
    const [userData, setUserData] = useState('');
    const [bookings, setBookings] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const userData = localStorage.getItem('user-info');
        if (userData) {
            setUserData(JSON.parse(userData))
        }
    }, [])
    const userKey = userData.accessToken;

    useEffect(() => {
        fetchBookings()

    }, [])


    const fetchBookings = async () => {
        try {
            const response = await fetch('https://nf-api.onrender.com/api/v1/holidaze/bookings', {
                method: "GET",
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${userKey}`
                }
            })
            const jsonData = response.json();
            console.log(jsonData)

        }catch (e) {
            console.log(e)
        }

    }



    return (
        <>

        </>
    );
};

export default ViewBookings;
