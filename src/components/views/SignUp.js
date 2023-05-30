import React, {useState} from 'react';
import {Link} from "react-router-dom";


const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [venueManager, setVenueManger] = useState(false);
    const [avatar, setAvatar] = useState('');

    async function register(event) {
        event.preventDefault()
        let item = {name, email, password, venueManager, avatar}
        console.log(item)
        let result = await fetch("https://nf-api.onrender.com/api/v1/holidaze/auth/register", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(item)
        })
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        window.location.reload();
    }
    const handleCheckBox = (event) => {
        setVenueManger(event.target.checked)
    }


    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        SignUp to <div className="text-blue-400">VenueFinder</div>
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                        <form  className="space-y-6" onSubmit={register}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="example@stud.noroff.no"
                                        title="email must be @stud.noroff.no"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
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
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-between text-sm">
                                <label htmlFor="venueManager" className="block text-sm font-medium leading-6 text-gray-900">
                                    Venue Manger
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="venueManager"
                                        name="venueManager"
                                        type="checkbox"
                                        checked={venueManager}
                                        onChange={handleCheckBox}
                                        className="block rounded-md"
                                        title="by being a venue mangager you can create a venue and book venues"
                                    />
                                </div>
                            </div>
                            <div>
                                <input
                                    type="submit"
                                    value="Sign Up"
                                    className="flex w-full justify-center rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                />
                            </div>
                        </form>
                        <Link to="/">
                            <p className="mt-4 text-sm text-blue-400">Already Have Account? Click Here</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )};

export default SignUp;
