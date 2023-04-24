import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import {Link} from "react-router-dom";
import {fetchVenues} from "../../store/modules/venueSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

function Home()  {
    const dispatch = useDispatch();
    const {data} = useSelector(state => state.data);
    useEffect(() => {
        dispatch(fetchVenues());
    }, [dispatch])

    return (
        <>
            <div className="w-full max-w-lg lg:max-w-xs flex-col mx-auto mt-2">
                <label htmlFor="search" className="sr-only">
                    Search
                </label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                        id="search"
                        name="search"
                        className=" block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mx-auto"
                        placeholder="Search"
                        type="search"
                    />
                </div>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Venues</h2>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {data.map((data) => (
                            <a key={data.id} href={data.href} className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={data.media}
                                        alt={data.name}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{data.name}</h3>
                                <button className="rounded-md w-1/2 h-12 mt-2 bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                    <Link className="flex flex-col mx-auto" to="/">View Venue</Link>
                                </button>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
}

export default Home;
