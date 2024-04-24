import PagedMinigame from "../PagedMinigame";
import KillsWinsStats from "../KillsWinsStats";
import React from "react";


function UhcMinigame({data, schema}){
    return <PagedMinigame schema={schema.uhc} data={data.stats.minigames.uhc}
                          formatted={(data) => <KillsWinsStats data={data}/>}/>
}

export default UhcMinigame;