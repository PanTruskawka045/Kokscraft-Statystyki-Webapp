import React from 'react';
import WinsStats from "../WinsStats";

function TntGamesMinigames({data}) {
    return (<>
        <h2 className={"font-[900] text-3xl text-border-primary mobile:text-2xl"}>Tnt Run</h2>
        <WinsStats data={data.stats.minigames['tnt-run'].overall}/>
        <h2 className={"font-[900] text-3xl text-border-primary mobile:text-2xl"}>Tnt Tag</h2>
        <WinsStats data={data.stats.minigames['tnt-tag'].overall}/>
    </>);
}

export default TntGamesMinigames;