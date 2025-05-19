import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import UsernamePrompt from "../UsernamePrompt";
import CircularLoading from "../../loading/CircularLoading";
import PlayerStatsContent from "./PlayerStatsContent";
import {Helmet} from "react-helmet";

function PlayerStats() {

    const {player} = useParams();


    if (player === undefined || player === "" || player === null) {
        return (<UsernamePrompt link={"player/stats"} prompt={"Pokaż statystyki gracza:"}/>);
    }

    return (
        <DownloadingPlayerStats player={player}/>
    );
}

function DownloadingPlayerStats({player}) {
    const [loadingStats, setLoadingStats] = useState(true);
    const [loadingSchema, setLoadingSchema] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [schema, setSchema] = useState({});

    function checkData(data) {
        if (data === null || data === undefined) {
            setError("Nie znaleziono gracza");
            return;
        }
        if (!data?.success) {
            setError("Nie znaleziono gracza");
            return;
        }

    }

    useEffect(() => {
        (async function () {
            setError(null);
            if (player.startsWith("id:")) {
                let url = dataUrl("id", player.substring("id:".length));
                await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                    // credentials: "include"
                }).then(res => res.json()).then(data => {
                    setData(data);
                    setLoadingStats(false);
                    checkData(data)
                }).catch(err => {
                    setError("Wystąpił błąd")
                    setLoadingStats(false)
                });
            } else {
                let url = dataUrl("name", player);
                await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                    // credentials: "include"
                }).then(res => res.json()).then(data => {
                    setData(data);
                    setLoadingStats(false);
                    checkData(data)
                }).catch(err => {
                    setError("Wystąpił błąd")
                    setLoadingStats(false)
                });
            }

        })();
    }, [player]);

    useEffect(() => {
        (async function () {
            await fetch("https://pantruskawka045.me/kokscraft-api-schema/").then(res => res.json()).then(data => {
                setLoadingSchema(false);
                setSchema(data);
            }).catch(err => {
                setError("Wystąpił błąd")
                setLoadingSchema(false)
            })
        })();
    }, []);

    if (loadingStats || loadingSchema) {
        return (
            <div className={"flex items-center justify-center min-h-screen"}>
                <CircularLoading/>
            </div>
        )
    }

    if (error !== null) {
        return (<UsernamePrompt link={"player/stats"} error={error} prompt={"Pokaż statystyki gracza:"}/>)
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Statystyki: {data.player.nickname}</title>
                <meta name="description"
                      content={`Statystyki gracza ${data.player.nickname} na serwerze kokscraft.pl`}/>

                <link rel={"icon"} href={`https://minotar.net/helm/cmok/${data.player.nickname}.png`}/>
            </Helmet>
            <PlayerStatsContent data={data} schema={schema}/>
        </>
    );


}

const dataUrl = (fetchBy, arg) => {
    //Check if url is localhost or else
    if (window.location.href.startsWith("http://localhost")) {
        return `http://localhost:8080/api/v2/player-data?key=${localStorage.getItem("kokscraft-api-key")}&${fetchBy === 'id' ? 'id' : 'player'}=${arg}`;
    }
    return `/api/player/stats/${fetchBy === 'id' ? 'id' : 'name'}?player=${arg}`;
}


export default PlayerStats;