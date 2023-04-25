import {Link} from "react-router-dom";
import venueSlice, {fetchVenues} from "../../store/modules/venueSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import SearchBar from "../individualcomponents/SearchBar";

function Home()   {
    const dispatch = useDispatch();
    const {venues} = useSelector(state => state.venues);
    console.log(venues)
    useEffect(() => {
        dispatch(fetchVenues());
    }, [dispatch])
    console.log("response in home.js",venues)
    const profile = [
        {
            name: "test",
            media: "test",
            id: 1,
            href: "www.vg.no"
        }
    ]
    return (
        <>
            <SearchBar/>
            <h1>Venues</h1>
            <div className="bg-red-500">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Venues</h2>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {/*{venues.map((data) => (
                            <div key={venue.id} className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={venue.media}
                                        alt={venue.name}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                    <div>{data.name}</div>
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{data.name}</h3>
                            </div>
                        ))}*/}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
