import useLocalStorage from "../../hook/useLocalStorage";
import {FilledStarIcon} from "../icon/StarIcon";
import React from "react";
import {useNavigate} from "react-router-dom";


function Favourites() {
    const [favourites, setFavourites] = useLocalStorage("koks-favourites", {});

    const removePlayer = (id) => {
        let fav = {...favourites};
        delete fav[`${id}`];
        setFavourites(fav);
    }

    return (
        <div className={"mobile:pt-2 lg:px-2"}>
            <h1 className={"text-5xl text-text-primary font-red-hat text-center"}>Ulubieńcy</h1>
            {Object.keys(favourites).length === 0 ? (
                <>
                    <h1 className={"text-3xl text-text-primary font-red-hat text-center"}>Nikt nie jest twoim
                        ulubieńcem.</h1>
                    <h1 className={"text-2xl text-text-primary font-red-hat text-center"}>Aby dodać kogoś do tej listy, kliknij w gwiazdkę przy nicku</h1>
                </>     
            ) : (
                <div className={"grid mobile:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-3 font-red-hat "}>
                    {Object.entries(favourites).map(([key, value]) => {
                        return <Favourite removePlayer={removePlayer} data={value}/>
                    })}
                </div>
            )}
        </div>
    );
}

function Favourite({data, removePlayer}) {

    const navigate = useNavigate();

    const stats = () => {
        navigate(`/player/stats/${data.nickname}`)
    }

    const friends = () => {
        navigate(`/player/friends/${data.nickname}`)

    }

    const remove = () => {
        removePlayer(data.id)
    }

    return <div className={"w-auto rounded-xl border-solid border-2 border-border-primary bg-text-primary p-4"}>
        <div className={"flex flex-row items-center gap-2 flex-wrap"}>
            <img
                src={`https://visage.surgeplay.com/face/${data.authId.length === 36 ? data?.authId : "c06f8906-4c8a-4911-9c29-ea1dbd1aab82"}.png`}
                alt={data.nickname}
                className={"aspect-square h-8"}/>
            <span className={"text-border-primary text-[24px] font-[900]"}>{data.nickname}</span>
        </div>
        <div className={"flex mt-2 gap-x-1"}>
            <div onClick={stats}
                 className={"rounded bg-border-primary text-text-primary p-1 font-bold grow flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"}>
                <span>Statystyki</span>
            </div>
            <div onClick={friends}
                 className={"rounded bg-border-primary text-text-primary p-1 font-bold grow flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"}>
                Znajomi
            </div>
            <div
                onClick={remove}
                className={"rounded bg-border-primary text-text-primary p-1 font-bold flex-none items-center justify-center cursor-pointer hover:scale-105 transition-transform"}>
                <FilledStarIcon size={32} className={"text-amber-500"}/>
            </div>
        </div>
    </div>
}

export default Favourites;