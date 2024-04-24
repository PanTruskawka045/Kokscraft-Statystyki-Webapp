import StatRecord from "../StatRecord";
import {formatInteger, roundToPercent} from "../../../../util/MathUtil";
import React from "react";

function WinsStats({data}){
    return (
        <div className={"mt-1"}>
            <StatRecord title={"Wygrane: "}>
                <span>{formatInteger(data.wins)}</span>
            </StatRecord>
            <StatRecord title={"Przegrane: "}>
                <span>{formatInteger(data.loses)}</span>
            </StatRecord>
            <StatRecord title={"Win Ratio: "}>
                <span>{roundToPercent(data.winRatio)}</span>
            </StatRecord>
        </div>
    );
}

export default WinsStats;