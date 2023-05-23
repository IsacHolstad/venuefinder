import React, {useState, useEffect} from "react";

const CreateVenue = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [media, setMedia] = useState([]);
    const [description, setDescription] = useState('');
    const [maxGuests, setMaxGuests] = useState(0);
    const [userData, setUserData] = useState('');

    const handlePriceChange = (event) => {
        const valuePrice = Number(event.target.value)
        setPrice(valuePrice)
    }

    const handleMaxGuests = (event) => {
        const valueGuests = Number(event.target.value)
        setMaxGuests(valueGuests)
    }


    useEffect(() => {
        const userData = localStorage.getItem('user-info');
        if (userData) {
            setUserData(JSON.parse(userData))
        }
    }, [])
    const userKey = userData.accessToken;


    async function postVenue(event) {
        event.preventDefault()
        let item = {name, media, description, maxGuests, price};
        let result = await fetch(`https://nf-api.onrender.com/api/v1/holidaze/venues`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${userKey}`
            },
            body: JSON.stringify(item),


        })
        result = await result.json();
        console.log(result)
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create <div className="text-blue-400">Venue</div>
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                        <form  className="space-y-6" onSubmit={postVenue}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        onChange={(e) => setName(e.target.value)}
                                        name="name"
                                        type="text"
                                        value={name}
                                        placeholder="venue name"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                    Price
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="price"
                                        onChange={handlePriceChange}
                                        name="price"
                                        type="text"
                                        value={price}
                                        placeholder="venue $"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="guests" className="block text-sm font-medium leading-6 text-gray-900">
                                    Max Guests
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="maxGuests"
                                        onChange={handleMaxGuests}
                                        name="maxGuests"
                                        value={maxGuests}
                                        type="text"
                                        placeholder="Max Guests"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                                    Image
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="image"
                                        onChange={(e) => setMedia(e.target.value)}
                                        name="image"
                                        value={media}
                                        type="text"
                                        placeholder="Image URL"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                    Description
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="description"
                                        onChange={(e) => setDescription(e.target.value)}
                                        name="description"
                                        value={description}
                                        placeholder="Write description of youre venue"
                                        className="block w-full h-32 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <input
                                    type="submit"
                                    value="Post Venue"
                                    className="flex w-full justify-center rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                />
                            </div>
                        </form>
                        <div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default CreateVenue;
