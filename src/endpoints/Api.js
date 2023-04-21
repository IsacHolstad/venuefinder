const API_BASE_URL = 'https://nf-api.onrender.com';





//POST
const CREATE_USER = API_BASE_URL + "/api/v1/holidaze/auth/register";
const CREATE_LOGIN = API_BASE_URL + "/api/v1/holidaze/auth/login";
const CREATE_VENUE = API_BASE_URL + "/api/v1/holidaze/venues"

//GET
const PROFILES_USERS = API_BASE_URL + "/api/v1/holidaze/profiles";
const VENUE_LISTINGS = API_BASE_URL + "/api/v1/holidaze/venues";


export default {
    CREATE_VENUE,
    CREATE_LOGIN,
    CREATE_USER,
    PROFILES_USERS,
    VENUE_LISTINGS
}