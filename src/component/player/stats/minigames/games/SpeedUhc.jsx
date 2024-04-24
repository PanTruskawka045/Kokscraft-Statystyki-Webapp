import KillsWinsStats from "../KillsWinsStats";
import PagedMinigame from "../PagedMinigame";

function SpeedUhcMinigame({data, schema}) {
    return <PagedMinigame schema={schema['speed-uhc']} data={data.stats.minigames['speed-uhc']}
                          formatted={(data) => <KillsWinsStats data={data}/>}/>
}

export default SpeedUhcMinigame;