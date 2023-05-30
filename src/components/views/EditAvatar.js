import React from 'react';
import {useState} from "react";
import {getUserData} from "../../data/Auth";
const EditAvatar = () => {
    const [avatar, setAvatar] = useState('');
    const userLocalData = getUserData();

    if (userLocalData) {
        const {name, accessToken} = userLocalData;
    }



    async function UpdateAvatar(event) {
        event.preventDefault();
        let item = {avatar};
        let result = await fetch(`https://nf-api.onrender.com/api/v1/holidaze/profiles/${userLocalData.name}/media`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${userLocalData.accessToken}`

            },
            body: JSON.stringify(item)
        })
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
    }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Update <div className="text-blue-400">Avatar</div>
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                        <form  className="space-y-6 mt-12" onSubmit={UpdateAvatar}>
                            <div>
                                <label htmlFor="avatar" className="block text-sm font-medium leading-6 text-gray-900">
                                    Profile Image
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="avatar"
                                        name="avatar"
                                        type="text"
                                        placeholder="Image URL"
                                        value={avatar}
                                        onChange={(e) => setAvatar(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <input
                                    type="submit"
                                    value="finish Edit"
                                    className="flex w-full justify-center rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditAvatar;
