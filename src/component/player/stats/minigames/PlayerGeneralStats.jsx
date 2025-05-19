import React from "react";
import {formatInteger, roundToPercent} from "../../../../util/MathUtil";
import StatRecord from "../StatRecord";

function PlayerGeneralStats({data}){
    return (
        <>
            <StatRecord title={"Wygrane gry: "}>
                <span>{formatInteger(data.player.overallStats.wins)}</span>
            </StatRecord>
            <StatRecord title={"Przegrane gry: "}>
                <span>{formatInteger(data.player.overallStats.losses)}</span>
            </StatRecord>
            <StatRecord title={"Win Ratio: "}>
                <span>{roundToPercent(data.player.overallStats.winRatio)}</span>
            </StatRecord>
            <StatRecord title={"Poziom: "}>
                <span>{data.player.level} ({formatInteger(data.player.xp)} xp)</span>
            </StatRecord>
            <StatRecord title={"Postęp: "}>
                <span>{roundToPercent(data.player.levelProgress)} ({formatInteger(data.player.toNextLevel)}/{formatInteger(data.player.forNextLevel)})</span>
            </StatRecord>
            <StatRecord title={"Rubiny: "}>
                <span>{formatInteger(data.player.currency)}</span>
            </StatRecord>
            <StatRecord title={"Koks coiny: "}>
                <span>{formatInteger(data.player.premiumCurrency)}</span>
            </StatRecord>
        </>
    );

}

export default PlayerGeneralStats;