import React from 'react';
import StatRecord from "../../StatRecord";
import {formatInteger, round, roundToPercent} from "../../../../../util/MathUtil";
import PagedMinigame from "../PagedMinigame";

function BedwarsMinigame({data, schema}) {
    return <PagedMinigame schema={schema.bedwars} data={data.stats.minigames.bedwars}
                          formatted={(data) => <FormattedBedwarsStats data={data}/>}/>
}

function FormattedBedwarsStats({data}) {
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
                <span>{formatInteger(data.loses)}</span>
            </StatRecord>
            <StatRecord title={"Win Ratio: "}>
                <span>{roundToPercent(data.winRatio)}</span>
            </StatRecord>
            <StatRecord title={"Zniszczone łóżka: "}>
                <span>{formatInteger(data.bedsBroken)}</span>
            </StatRecord>
        </div>
    );
}


export default BedwarsMinigame;