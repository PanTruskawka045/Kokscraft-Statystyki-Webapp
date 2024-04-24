import PagedMinigame from "../PagedMinigame";
import React from "react";
import KillsWinsStats from "../KillsWinsStats";


function SkywarsMinigame({data, schema}) {
    return <PagedMinigame schema={schema.skywars} data={data.stats.minigames.skywars}
                          formatted={(data) => <KillsWinsStats data={data}/>}/>
}

export default SkywarsMinigame;