import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {schematicsUrl} from "../SpeedBuilders";
import CircularLoading from "../../loading/CircularLoading";

function LeaderboardList() {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({});
    const [error, setError] = useState(null)
    const [query, setQuery] = useState("")

    useEffect(() => {
        (async function () {
            await fetch(schematicsUrl(), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                credentials: "include"
            }).then(res => res.json()).then(data => {
                setData(data);
                setLoading(false);
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


    return <div className={"p-20 mobile:p-4 w-full font-red-hat"}>
        <div className={"rounded-xl p-4 pt-2 flex flex-grow flex-col"}>
            <h1 className={"text-text-primary text-4xl font-bold"}>Szukaj budowli</h1>
            <input className={"mt-5 rounded-full px-5 text-2xl h-12 w-full bg-input text-border-primary" +
                " focus:border-0 focus:outline-none" +
                " placeholder:text-placeholder"}
                   placeholder={"Wpisz nazwę budowli"}
                   onInput={(e) => setQuery(e.target.value)}
            />
        </div>
        <div className={"gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10"}>
            {Object.keys(data.blueprints).map((id, index) => {
                let name = data.blueprints[id];
                if (query !== '' && !name.toLowerCase().includes(query.toLowerCase())) {
                    return null;
                }
                return <LeaderboardListRecord id={`${+id}`} name={name}/>;
            })}
        </div>
    </div>;

}

function LeaderboardListRecord({name, id}) {
    return (
        <Link to={`/speedbuilders/leaderboards/${id}`}>
            <div className={"bg-text-primary p-2 rounded-xl cursor-pointer hover:scale-105 transition-transform"}>
                <span className={"text-primary font-bold px-4"}>{name}</span>
            </div>
        </Link>
    );

}

export default LeaderboardList;