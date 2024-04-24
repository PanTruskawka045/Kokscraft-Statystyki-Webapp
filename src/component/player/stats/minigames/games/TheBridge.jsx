import PagedMinigame from "../PagedMinigame";
import React from "react";
import KillsWinsStats from "../KillsWinsStats";

function TheBridgeMinigame({data, schema}) {
    return <PagedMinigame schema={schema['the-bridge']} data={data.stats.minigames['the-bridge']}
                          formatted={(data) => <KillsWinsStats data={data}/>}/>
}

export default TheBridgeMinigame;