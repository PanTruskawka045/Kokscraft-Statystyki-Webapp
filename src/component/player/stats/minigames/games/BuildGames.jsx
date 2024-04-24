import WinsStats from "../WinsStats";
import React from "react";


function BuildGamesMinigames({data}) {

    return (<>
        <h2 className={"font-[900] text-3xl text-border-primary"}>Build Battle Solo</h2>
        <WinsStats data={data.stats.minigames['build-battle-solo'].overall}/>
        <h2 className={"font-[900] text-3xl text-border-primary"}>Build Battle Doubles</h2>
        <WinsStats data={data.stats.minigames['build-battle-doubles'].overall}/>
        <h2 className={"font-[900] text-3xl text-border-primary"}>Speed Builders</h2>
        <WinsStats data={data.stats.minigames['speed-builders'].overall}/>
    </>);
}

export default BuildGamesMinigames;