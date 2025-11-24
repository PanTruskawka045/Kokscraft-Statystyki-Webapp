import PagedMinigame from "../PagedMinigame";
import React from "react";
import KillsWinsStats from "../KillsWinsStats";


function PillarsOfFortune({data, schema}) {
    return <PagedMinigame schema={schema['pillars-of-fortune']} data={data.stats.minigames['pillars-of-fortune']}
                          formatted={(data) => <KillsWinsStats data={data}/>}/>
}

export default PillarsOfFortune;