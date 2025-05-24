import {useParams} from "react-router-dom";
import UsernamePrompt from "../../player/UsernamePrompt";
import React, {useEffect, useState} from "react";
import CircularLoading from "../../loading/CircularLoading";
import SpeedBuildersStatsContent from "./SpeedBuildersStatsContent";
import {dataUrl, schematicsUrl} from "../SpeedBuilders";

function SpeedBuildersStats() {

    const {player} = useParams();


    if (player === undefined || player === "" || player === null) {
        return (<UsernamePrompt link={"speedbuilders/stats"} prompt={"Pokaż znajomych gracza:"}/>);
    }

    return (
        <DownloadingPlayerFriends player={player}/>
    );
}

function DownloadingPlayerFriends({player}) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [schematicData, setSchematicData] = useState({});
    const [error, setError] = useState(null);

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
                await fetch(dataUrl("id", player.substring("id:".length)), {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                    credentials: "include"
                }).then(res => res.json()).then(data => {
                    setData(data);
                    setLoading(false);
                    checkData(data)
                }).catch(err => {
                    setError("Wystąpił błąd")
                    setLoading(false)
                });
            } else {
                await fetch(dataUrl("name", player), {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                    credentials: "include"
                }).then(res => res.json()).then(data => {
                    setData(data);
                    checkData(data)
                }).catch(err => {
                    setError("Wystąpił błąd")
                });
            }

            if (error) {
                return;
            }

            await fetch(schematicsUrl(), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                credentials: "include"
            }).then(res => res.json()).then(data => {
                setSchematicData(data);
                setLoading(false);
                checkData(data)
            }).catch(err => {
                setError("Wystąpił błąd")
                setLoading(false)
            });

        })();
    }, [player]);

    if (loading) {
        return (
            <div className={"flex items-center justify-center min-h-screen"}>
                <CircularLoading/>
            </div>
        )
    }

    if (error !== null) {
        return (<UsernamePrompt link={"speedbuilders/stats"} error={error} prompt={"Pokaż statystyki speed builders gracza:"}/>)
    }
    return (
        <>
            <SpeedBuildersStatsContent data={data} schematics={schematicData}/>
        </>
    );
}

export default SpeedBuildersStats;