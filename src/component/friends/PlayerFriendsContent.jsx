import {useNavigate} from "react-router-dom";
import {EmptyStarIcon, FilledStarIcon} from "../icon/StarIcon";
import React from "react";
import useLocalStorage from "../../hook/useLocalStorage";


function PlayerFriendsContent({data}) {
    const [favourites, setFavourites] = useLocalStorage("koks-favourites", {})


    return (
        <div className={"mobile:pt-2 lg:px-2 mobile:pb-20"}>
            <h1 className={"text-5xl text-text-primary font-red-hat text-center mobile:text-3xl font-bold"}>Znajomi</h1>
            {data.length === 0 ? (
                <>
                    <h1 className={"text-3xl text-text-primary font-red-hat text-center mobile:text-2xl"}>Podany gracz nie ma żadnych znajomych. 🥹</h1>
                </>
            ) : (
                <div className={"grid mobile:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-3 font-red-hat "}>
                    {data.map((value) => {
                        return <PlayerRecordComponent data={value} favourites={favourites} setFavourites={setFavourites}/>
                    })}
                </div>
            )}
        </div>
    );
}

function PlayerRecordComponent({data, favourites, setFavourites}) {
    const navigate = useNavigate();

    const stats = () => {
        navigate(`/player/stats/${data.name}`)
    }

    const friends = () => {
        navigate(`/player/friends/${data.name}`)

    }

    const favourite = () => {
        let fav = {...favourites};
        fav[`${data.id}`] = {
            nickname: data.name,
            id: data.id,
            authId: data.skin,
        };
        setFavourites(fav);
    }

    const removeFavourite = () => {
        let fav = {...favourites};
        delete fav[`${data.id}`];
        setFavourites(fav);

    }

    return <div className={"w-auto rounded-xl border-solid border-2 border-border-primary bg-text-primary p-4"}>
        <div className={"flex flex-row items-center gap-2 flex-wrap"}>
            <img
                src={`https://visage.surgeplay.com/face/${data.skin}.png`}
                alt={data.name}
                className={"aspect-square h-8"}/>
            <span className={"text-border-primary text-[24px] font-[900]"}>{data.name}</span>
        </div>
        <div className={"flex mt-2 gap-x-1"}>
            <div onClick={stats}
                 className={"rounded bg-border-primary text-text-primary p-1 font-bold grow flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"}>
                <span className={"mobile:text-sm"}>Statystyki</span>
            </div>
            <div onClick={friends}
                 className={"rounded bg-border-primary text-text-primary p-1 font-bold grow flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"}>
                <span className={"mobile:text-sm"}>Znajomi</span>
            </div>
            <div
                onClick={!!favourites[`${data.id}`] ? removeFavourite : favourite}
                className={"rounded bg-border-primary text-text-primary p-1 font-bold flex-none items-center justify-center cursor-pointer hover:scale-105 transition-transform"}>
                {!!favourites[`${data.id}`] ? (<FilledStarIcon size={8} className={"text-amber-500"}/>) : (
                    <EmptyStarIcon size={8} className={"text-amber-500"}/>)}
            </div>
        </div>
    </div>
}


export default PlayerFriendsContent;