import React from 'react';
import {Link} from "react-router-dom";
import {getUserData} from "../../data/Auth";

const ProfilePage = () => {
    const userLocalData = getUserData();

    if (userLocalData) {
        const {name, accessToken, avatar} = userLocalData;
    }


     return (
        <>
            {userLocalData && (
            <section className="pt-16 bg-blueGray-50">
                <div className="w-full lg:w-4/12 px-4 mx-auto">
                    <div
                        className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full px-4 flex justify-center">
                                    <div className="relative">
                                            <img
                                                src={userLocalData.avatar}
                                                alt="You have no profile picture"
                                                className="w-full h-full object-contain mx-auto max-w-lg max-h-lg bg-gray-100"
                                            />
                                    </div>
                                </div>
                                <Link to="/editavatar">
                                    <p className="text-sm text-center mt-2 text-blue-400 font-medium">Edit Avatar</p>
                                </Link>

                            </div>
                            <div className="text-center mt-12">
                                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                                    {userLocalData.name}
                                </h3>
                                <div className="mb-2 text-blueGray-600 mt-10">
                                    <h3 className="fas fa-briefcase mr-2 text-lg text-blueGray-400"> {userLocalData.email}</h3>
                                    <p>{userLocalData.venueManager ? "Venue Manager" : "Not Venue Manager"}</p>
                                </div>
                            </div>
                            <div className="mt-5 py-10 border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <div className="gap-3 mt-2 flex flex-col text-center">
                                            <Link to="/uservenues">
                                                <button className="flex w-full  justify-center rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                    View {userLocalData.name} Venues
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            )}
            {!userLocalData && (
                <div className="mx-auto text-center mt-14">
                    <h1 className="font-semibold">You are not logged in</h1>
                    <Link to="/signin">
                        <button className="flex mt-4 w-32 mx-auto  justify-center rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                             Sign in
                        </button>
                    </Link>
                </div>
            )}
        </>
    );

}

export default ProfilePage;
