import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import UsernamePrompt from "./player/UsernamePrompt";
import PlayerStats from "./player/stats/PlayerStats";
import PlayerFriends from "./friends/PlayerFriends";
import Favourites from "./favourites/Favourites";

function MainContent() {

    return (
        <div className={"lg:px-20 lg:py-0 px-0 pb-20 w-screen min-h-screen bg-background-primary"}>
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

                <Route path="player/stats"
                       element={<UsernamePrompt link={"player/stats"} prompt={"Pokaż statystyki gracza:"}/>}/>
                <Route path="player/friends"
                       element={<UsernamePrompt link={"player/friends"} prompt={"Pokaż znajomych gracza:"}/>}/>
            </Routes>
        </div>
    );

}

export default MainContent;