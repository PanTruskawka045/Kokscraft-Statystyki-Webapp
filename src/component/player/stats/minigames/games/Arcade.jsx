import WinsStats from "../WinsStats";
import React from "react";


function ArcadeMinigames({data}){
    return (<>
        <h2 className={"font-[900] text-3xl text-border-primary"}>Gravity</h2>
        <WinsStats data={data.stats.minigames.gravity.overall}/>
    </>);
}

export default ArcadeMinigames;