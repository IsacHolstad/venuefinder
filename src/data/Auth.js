export function getUserData() {
    const localUserData = localStorage.getItem('user-info');
    if (localUserData) {
        const parsedLocalUserData = JSON.parse(localUserData);
        const {name, email, venueManager, accessToken, avatar} = parsedLocalUserData;
        return {name, email, venueManager, accessToken, avatar};
    }
    return null
}