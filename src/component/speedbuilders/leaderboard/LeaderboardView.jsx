import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {leaderboardUrl, schematicsUrl} from "../SpeedBuilders";
import CircularLoading from "../../loading/CircularLoading";
import errorIcon from "../../../assets/error.png";
import useWindowSize from "../../../hook/useWindowSize";

function LeaderboardView() {

    const {leaderboard} = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState();
    const [schematicData, setSchematicData] = useState()
    const {width, height} = useWindowSize();

    useEffect(() => {
        (async function () {
            await fetch(schematicsUrl(), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                // credentials: "include"
            }).then(res => res.json()).then(data => {
                setSchematicData(data);
                if (!data.success) {
                    setError("Błąd przy ładowaniu schematów")
                }
            }).catch(err => {
                setError("Wystąpił błąd")
            });

            await fetch(leaderboardUrl(leaderboard), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                // credentials: "include"
            }).then(res => res.json()).then(data => {
                setData(data);
                setLoading(false);
                if (!data.success) {
                    setError("Wystąpił błąd")
                }
            }).catch(err => {
                setError("Wystąpił błąd")
                setLoading(false)
            });
        })();
    }, []);

    if (loading) {
        return (
            <div className={"flex items-center justify-center min-h-screen"}>
                <CircularLoading/>
            </div>
        )
    }


    if (error !== null) {
        return (
            <div className={"flex items-center justify-center min-h-screen flex-col"}>
                <img src={errorIcon} className={"w-56 h-56"}/>
                <span className={"text-text-primary font-bold font-red-hat text-4xl"}>{error}</span>
                <Link to={"/speedbuilders/leaderboards"}
                      className={"text-white font- hover:text-blue-600"}>Powrót</Link>
            </div>
        )
    }


    return <div className={"p-8 w-full"}>
        <h1 className={"text-center text-2xl text-text-primary mb-4 font-bold"}>Budowla: {schematicData.blueprints[leaderboard] || 'Nieznany schemat'}</h1>
        <div className={"bg-text-primary rounded-xl p-4 pt-2"}>
            <div className={"w-full grid grid-cols-[200px_auto_200px] mobile:grid-cols-[1fr_auto_1fr]"}>
                <span
                    className={"text-2xl font-bold text-border-primary"}>{width > height && width > 1000 ? "Miejsce" : "🏅"}</span>
                <span className={"text-2xl font-bold text-border-primary"}>Gracz</span>
                <span
                    className={"text-2xl font-bold text-border-primary"}>{width > height && width > 1000 ? "Czas" : "⌚️"}</span>
                <hr className={"col-span-3"}/>
                {Object.keys(data.records).map((stats, index) => {
                    let recordData = data.records[index];

                    return <>
                        <div className={"flex items-center"}>
                            <span className={`text-border-primary text-3xl`}>{placeIcon(index + 1)}</span>
                        </div>
                        <div className={"flex flex-row items-center gap-2"}>
                            <img
                                src={`https://visage.surgeplay.com/face/${recordData.playerSkinData.skin || "c06f8906-4c8a-4911-9c29-ea1dbd1aab82"}.png`}
                                alt={recordData.playerSkinData.name}
                                className={"aspect-square h-12"}/>
                            <span
                                className={`text-border-primary text-xl font-bold`}>{recordData.playerSkinData.name}</span>
                        </div>
                        <div className={"flex items-center"}>
                            <span className={`text-border-primary text-xl`}>{recordData.timeInSeconds}s</span>
                        </div>
                    </>
                        ;
                })}
            </div>
        </div>
    </div>
        ;

}

const placeIcon = (place) => {
    switch (place) {
        case 1:
            return "🥇";
        case 2:
            return "🥈";
        case 3:
            return "🥉";
        default:
            return `${place}.`

    }
}


export default LeaderboardView;