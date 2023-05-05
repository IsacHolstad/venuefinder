import React from 'react';

const ProfilePage = () => {
    return (
        <>
            <h1 className="text-center mt-12">PROFILE PAGE</h1>
            <section className="pt-16 bg-blueGray-50">
                <div className="w-full lg:w-4/12 px-4 mx-auto">
                    <div
                        className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full px-4 flex justify-center">
                                    <div className="relative">
                                        <div
                                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"></div>
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
                                    "name"
                                </h3>
                                <div className="mb-2 text-blueGray-600 mt-10">
                                    <h3 className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></h3>
                                    "email@gmail.com"
                                </div>
                            </div>
                            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        

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
