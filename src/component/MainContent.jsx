import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import UsernamePrompt from "./player/UsernamePrompt";
import PlayerStats from "./player/stats/PlayerStats";
import PlayerFriends from "./friends/PlayerFriends";
import Favourites from "./favourites/Favourites";
import SpeedBuildersStats from "./speedbuilders/stats/SpeedBuildersStats";
import LeaderboardList from "./speedbuilders/leaderboard/LeaderboardList";
import LeaderboardView from "./speedbuilders/leaderboard/LeaderboardView";

function MainContent() {

    return (
        <div className={"lg:px-20 lg:py-0 px-0 min-h-screen bg-background-primary"}>
            <Routes>
                {/*<Route path="/" element={<MainPage/>}/>*/}
                {/*<Route index element={<MainPage/>}/>*/}
                {/*<Route path="*" element={<MainPage/>}/> */}

                <Route path="/" element={<Navigate to={"player/stats"}/>}/>
                <Route index element={<Navigate to={"player/stats"}/>}/>
                <Route path="*" element={<Navigate to={"player/stats"}/>}/>

                <Route path="player/stats/:player" element={<PlayerStats/>}/>
                <Route path="player/friends/:player" element={<PlayerFriends/>}/>
                <Route path="favourites" element={<Favourites/>}/>

                <Route path="speedbuilders/stats/:player" element={<SpeedBuildersStats/>}/>

                <Route path="player/stats"
                       element={<UsernamePrompt link={"player/stats"} prompt={"Pokaż statystyki gracza:"}/>}/>
                <Route path="speedbuilders/stats"
                       element={<UsernamePrompt link={"speedbuilders/stats"}
                                                prompt={"Pokaż statystyki speed builders gracza:"}/>}/>
                <Route path="player/friends"
                       element={<UsernamePrompt link={"player/friends"} prompt={"Pokaż znajomych gracza:"}/>}/>

                <Route path="speedbuilders/leaderboards" element={<LeaderboardList/>}/>
                <Route path="speedbuilders/leaderboards/:leaderboard" element={<LeaderboardView/>}/>

            </Routes>
        </div>
    );

}

export default MainContent;