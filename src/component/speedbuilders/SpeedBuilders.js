function schematicsUrl() {
    //Check if url is localhost or else
    if (window.location.href.startsWith("http://localhost")) {
        return `http://localhost:8080/api/v2/speed-builders/blueprints?key=${localStorage.getItem("kokscraft-api-key")}`;
    }
    return `/api/speed-builders/blueprints`;
}

function dataUrl(fetchBy, arg) {
    //Check if url is localhost or else
    if (window.location.href.startsWith("http://localhost")) {
        return `http://localhost:8080/api/v2/speed-builders/player-data?key=${localStorage.getItem("kokscraft-api-key")}&${fetchBy === 'id' ? 'id' : 'player'}=${arg}`;
    }
    return `/api/speed-builders/stats/${fetchBy === 'id' ? 'id' : 'name'}?player=${arg}`;
}

function leaderboardUrl(arg) {
    if (window.location.href.startsWith("http://localhost")) {
        return `http://localhost:8080/api/v2/speed-builders/leaderboard?key=${localStorage.getItem("kokscraft-api-key")}&blueprint=${arg}`;
    }
    return `/api/speed-builders/leaderboard?id=${arg}`;
}

export {schematicsUrl, dataUrl, leaderboardUrl};