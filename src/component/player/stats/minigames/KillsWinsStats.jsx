import StatRecord from "../StatRecord";
import {formatInteger, round, roundToPercent} from "../../../../util/MathUtil";
import React from "react";

function KillsWinsStats({data}){
    return (
        <div className={"mt-1"}>
            <StatRecord title={"Zabójstwa: "}>
                <span>{formatInteger(data.kills)}</span>
            </StatRecord>
            <StatRecord title={"Śmierci: "}>
                <span>{formatInteger(data.deaths)}</span>
            </StatRecord>
            <StatRecord title={"K/D: "}>
                <span>{round(data.kd, 2)}</span>
            </StatRecord>
            <StatRecord title={"Wygrane: "}>
                <span>{formatInteger(data.wins)}</span>
            </StatRecord>
            <StatRecord title={"Przegrane: "}>
                <span>{formatInteger(data.losses)}</span>
            </StatRecord>
            <StatRecord title={"Win Ratio: "}>
                <span>{roundToPercent(data.winRatio)}</span>
            </StatRecord>
        </div>
    );
}

export default KillsWinsStats;