import Moment from "react-moment";
import React from "react";
import StatRecord from "../StatRecord";


function PlayerGeneralData({data}) {
    return (
        <>
            <StatRecord title={"Data pierwszego logowania: "}>
                <Moment unix
                        format={"HH:mm DD/MM/YYYY"}>{data.player.firstConnection / 1000}</Moment>
                <span> (<Moment fromNow unix>{data.player.firstConnection / 1000}</Moment>)</span>
            </StatRecord>

            <StatRecord title={"Data ostatniego logowania: "}>
                <Moment unix
                        format={"HH:mm DD/MM/YYYY"}>{data.player.lastConnection / 1000}</Moment>
                <span> (<Moment fromNow unix>{data.player.lastConnection / 1000}</Moment>)</span>
            </StatRecord>

            <StatRecord title={"Łączy czas online: "}>
                <span>{calculateTimespan(data.player.time * 1000)}</span>
            </StatRecord>

            <StatRecord title={"Ranga: "}>
                <span className={"font-[900]"}
                      style={{color: `#${data.player.rank.color}`}}>{data.player.rank.name}</span>
            </StatRecord>

            {data.player.rank.timeLeft && (
                <StatRecord title={"Pozostały czas: "}>
                    <span>{calculateTimespan(data.player.rank.timeLeft)}</span>
                </StatRecord>
            )}
            {data.player.staffRank && (
                <StatRecord title={"Ranga funkcyjna: "}>
                    <span className={"font-[900]"}
                          style={{color: `#${data.player.staffRank.color}`}}>{data.player.staffRank.name}</span>
                </StatRecord>
            )}
        </>
    );
}

export default PlayerGeneralData;

function calculateTimespan(time) {
    const SECOND = 1000;
    let seconds = Math.floor((time / SECOND) % 60);
    let minutes = Math.floor((time / (SECOND * 60)) % 60);
    let hours = Math.floor((time / (SECOND * 60 * 60)) % 24);
    let days = Math.floor(time / (24 * 60 * 60 * SECOND));
    if (days > 0) {
        if (hours > 0) {
            return `${days} ${timeUnit(days, "dni")}, ${hours} ${timeUnit(hours, "godzin")}`;
        }
        return `${days} ${timeUnit(days, "dni")}`;
    }
    if (hours > 0) {
        if (minutes > 0) {
            return `${hours} ${timeUnit(hours, "godzin")}, ${minutes} ${timeUnit(minutes, "minut")}`;
        }
        return `${hours} ${timeUnit(hours, "godzin")}`;
    }
    if (minutes > 0) {
        if (seconds > 0) {
            return `${minutes} ${timeUnit(minutes, "minut")}, ${seconds} ${timeUnit(seconds, "sekund")}`;
        }
        return `${minutes} ${timeUnit(minutes, "minut")}`;
    }
    if (seconds > 0) {
        return `${seconds} ${timeUnit(seconds, "sekund")}`;
    }
    return "Teraz";
}

function timeUnit(amount, unit) {
    switch (unit) {
        case "dni": {
            if (amount === 1) {
                return "dzień";
            }
            if (amount % 10 < 5 && amount !== 15) {
                return "dni";
            }
            return "dni";
        }
        default : {
            if (amount === 1) {
                return unit + "a";
            }
            if (amount % 10 < 5 && amount !== 15) {
                return unit + "y";
            }
            return unit;
        }
    }
}