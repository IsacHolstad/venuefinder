import React, {useEffect, useState} from 'react';

const ProfilePage = () => {
    const [userData, setUserData] = useState('');

    useEffect(() => {
        const userData = localStorage.getItem('user-info');
        if (userData) {
            setUserData(JSON.parse(userData))
        }
    }, [])
    const userId = userData.id
    async function getUserVenues(event) {
        event.preventDefault();
        let result = await fetch(`https://nf-api.onrender.com/api/v1/holidaze/profiles/${userId}/venues`, {
            method: "GET",
            headers: {
                "Authorization" : "application/json"
            }

        })
        console.log(result)
        //TODO not done
    }

    return (
        <>
            <section className="pt-16 bg-blueGray-50">
                <div className="w-full lg:w-4/12 px-4 mx-auto">
                    <div
                        className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full px-4 flex justify-center">
                                    <div className="relative">
                                            <img
                                                src={userData.avatar}
                                                className="w-full h-full object-contain mx-auto max-w-lg max-h-lg bg-gray-300"
                                            />
                                    </div>
                                </div>
                                <div className="w-full px-4 text-center mt-20">
                                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">0
                                        </span>
                                            <span className="text-sm text-blueGray-400">Venues Made</span>
                                        </div>
                                        <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">3
                                        </span>
                                            <span className="text-sm text-blueGray-400">Venue Booked</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-12">
                                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                                    {userData.name}
                                </h3>
                                <div className="mb-2 text-blueGray-600 mt-10">
                                    <h3 className="fas fa-briefcase mr-2 text-lg text-blueGray-400"> {userData.email}</h3>
                                </div>
                            </div>
                            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <p className="text-md font-semibold underline">My Venues</p>
                                        <div className="gap-3 mt-2 flex flex-col text-center">
                                            <img
                                                src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
                                                alt="venue name"
                                            />
                                            <button className="flex w-full  justify-center rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                View "name"
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProfilePage;
