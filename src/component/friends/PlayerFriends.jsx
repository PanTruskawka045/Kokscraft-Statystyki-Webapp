import {useParams} from "react-router-dom";
import UsernamePrompt from "../player/UsernamePrompt";
import React, {useEffect, useState} from "react";
import CircularLoading from "../loading/CircularLoading";
import {Helmet} from "react-helmet";
import PlayerFriendsContent from "./PlayerFriendsContent";

function PlayerFriends() {

    const {player} = useParams();


    if (player === undefined || player === "" || player === null) {
        return (<UsernamePrompt link={"player/friends"} prompt={"Pokaż znajomych gracza:"}/>);
    }

    return (
        <DownloadingPlayerFriends player={player}/>
    );
}

function DownloadingPlayerFriends({player}) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
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
                    // credentials: "include"
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
                    // credentials: "include"
                }).then(res => res.json()).then(data => {
                    setData(data);
                    setLoading(false);
                    checkData(data)
                }).catch(err => {
                    setError("Wystąpił błąd")
                    setLoading(false)
                });
            }

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
        return (<UsernamePrompt link={"player/friends"} error={error} prompt={"Pokaż znajomych gracza:"}/>)
    }
    return (
        <>
            <PlayerFriendsContent data={data.friends}/>
        </>
    );


}

const dataUrl = (fetchBy, arg) => {
    //Check if url is localhost or else
    if (window.location.href.startsWith("http://localhost")) {
        return `http://localhost:8080/api/v2/friends?key=${localStorage.getItem("kokscraft-api-key")}&${fetchBy === 'id' ? 'id' : 'player'}=${arg}`;
    }
    return `/api/player/friends/${fetchBy === 'id' ? 'id' : 'name'}?player=${arg}`;
}


export default PlayerFriends;