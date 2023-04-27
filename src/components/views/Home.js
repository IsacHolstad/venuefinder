import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import SearchBar from "../individualcomponents/SearchBar";
import {fetchVenues} from "../../store/modules/venueSlice";

function Home()   {
    const dispatch = useDispatch();
    const {venues} = useSelector(state => state.venues);
    useEffect(() => {
        dispatch(fetchVenues());
    }, [dispatch])
    return (
        <>
            <SearchBar/>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Venues</h2>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {venues.map((venue) => (
                            <div key={venue.id} className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-50 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={venue.media}
                                        alt={venue.name}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{venue.name}</h3>
                                <h3 className="text-sm text-gray-700">rating: {venue.rating}/10</h3>
                                <Link to={`venuedetail/${venue.id}`} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    <button className="mt-4">View Venue</button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
