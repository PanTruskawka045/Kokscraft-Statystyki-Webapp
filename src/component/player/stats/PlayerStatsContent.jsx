import React from 'react';
import Accordion from "../../Accordin";
import BedwarsMinigame from "./minigames/games/Bedwars";
import PlayerGeneralData from "./minigames/PlayerGeneralData";
import PlayerGeneralStats from "./minigames/PlayerGeneralStats";
import SkywarsMinigame from "./minigames/games/Skywars";
import TheBridgeMinigame from "./minigames/games/TheBridge";
import UhcMinigame from "./minigames/games/Uhc";
import SpeedUhcMinigame from "./minigames/games/SpeedUhc";
import TntGamesMinigames from "./minigames/games/TntGames";
import ArcadeMinigames from "./minigames/games/Arcade";
import BuildGamesMinigames from "./minigames/games/BuildGames";
import {EmptyStarIcon, FilledStarIcon} from "../../icon/StarIcon";
import useLocalStorage from "../../../hook/useLocalStorage";

function PlayerStatsContent({data, schema}) {

    const [favourites, setFavourites] = useLocalStorage("koks-favourites", {});

    function favourite() {
        let fav = {...favourites};
        fav[`${data.player.id}`] = {
            nickname: data.player.nickname,
            id: data.player.id,
            authId: data.player.authId,
        };
        setFavourites(fav);
    }

    function removeFavourite() {
        let fav = {...favourites};
        delete fav[`${data.player.id}`];
        setFavourites(fav);
    }

    return (<div className={"grid grid-cols-[minmax(400px,_30%)_auto] p-6 mobile:grid-cols-1 gap-2 font-red-hat mobile:pb-24"}>
        <div className={"mobile:grid-cols-1"}>
            <div className={"w-auto rounded-xl border-solid border-2 border-border-primary bg-text-primary p-4"}>
                <span className={"text-border-primary text-[32px] font-[900] mobile:text-[24px]"}>INFORMACJE O GRACZU</span>
                <div className={"flex flex-row items-center gap-2 flex-wrap"}>
                    <img
                        src={`https://visage.surgeplay.com/face/${data.player.mojangAccount ? data?.player?.authId : "c06f8906-4c8a-4911-9c29-ea1dbd1aab82"}.png`}
                        alt={data.player.nickname}
                        className={"aspect-square h-12 mobile:h-10"}/>
                    <span
                        className={"text-border-primary text-[32px] font-[900] mobile:text-[24px]"}>{data.player.nickname}</span>{!!favourites[`${data.player.id}`] ? (
                    <span className={"cursor-pointer hover:scale-105 transition-transform"}
                          onClick={removeFavourite}><FilledStarIcon className={"text-amber-500 ml-auto mobile:h-8 mobile:w-8"}/></span>
                ) : (<span className={"cursor-pointer hover:scale-105 transition-transform"}
                           onClick={favourite}><EmptyStarIcon className={"text-amber-500 ml-auto mobile:h-8 mobile:w-8"}/></span>)}
                </div>

                <div className={"w-auto h-[2px] my-4 bg-border-primary"}/>
                <PlayerGeneralData data={data}/>
                <div className={"w-auto h-[2px] my-4 bg-border-primary"}/>
                <PlayerGeneralStats data={data}/>

            </div>


        </div>
        <div className={"mobile:grid-cols-1"}>
            <Accordion title={"BEDWARS"} open={false}>
                <div>
                    <BedwarsMinigame data={data} schema={schema}/>
                </div>
            </Accordion>
            <Accordion title={"SKYWARS"} open={false} topGap={2}>
                <div>
                    <SkywarsMinigame data={data} schema={schema}/>
                </div>
            </Accordion>
            <Accordion title={"THE BRIDGE"} open={false} topGap={2}>
                <div>
                    <TheBridgeMinigame data={data} schema={schema}/>
                </div>
            </Accordion>
            <Accordion title={"UHC"} open={false} topGap={2}>
                <div>
                    <UhcMinigame data={data} schema={schema}/>
                </div>
            </Accordion>
            <Accordion title={"SPEED UHC"} open={false} topGap={2}>
                <div>
                    <SpeedUhcMinigame data={data} schema={schema}/>
                </div>
            </Accordion>
            <Accordion title={"TNT GAMES"} open={false} topGap={2}>
                <div>
                    <TntGamesMinigames data={data} schema={schema}/>
                </div>
            </Accordion>
            <Accordion title={"ARCADE"} open={false} topGap={2}>
                <div>
                    <ArcadeMinigames data={data} schema={schema}/>
                </div>
            </Accordion>
            <Accordion title={"BUILD GAMES"} open={false} topGap={2}>
                <div>
                    <BuildGamesMinigames data={data} schema={schema}/>
                </div>
            </Accordion>

        </div>

    </div>);
}


export default PlayerStatsContent;