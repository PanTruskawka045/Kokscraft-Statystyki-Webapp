import React, {useState} from 'react';

import logo from "../../assets/logo.png";
import {useNavigate} from "react-router-dom";

function UsernamePrompt({link, error = null, prompt}) {

    const [playerName, setPlayerName] = useState("");

    const navigate = useNavigate();

    const onClick = () => {
        if (playerName === "") return;
        navigate(`/${link}/${playerName}`);
    }

    return (
        <div className={"flex items-center justify-center h-screen"}>
            <form className={"rounded-xl bg-border-primary flex items-center flex-col text-center p-10 font-red-hat"} onSubmit={onClick}>
                <img src={logo} className={"w-52 mobile:w-36"} alt={"Logo koskcraft"}/>

                <div className={"w-[80%] text-wrap"}>
                    <span className={"text-5xl text-text-primary font-red-hat mobile:text-3xl"}>{prompt}</span>
                </div>
                {error !== null && (
                    <div className={"rounded-xl border-solid border-error my-3 border-2 block py-1"}>
                        <span className={"text-error text-3xl m-16"}>{error}</span>
                    </div>
                )}

                <input onInput={(e) => setPlayerName(e.target.value)}
                       className={"mt-5 rounded-full px-5 text-2xl h-12 w-2/3 bg-input text-border-primary" +
                           " focus:border-0 focus:outline-none" +
                           " placeholder:text-placeholder" +
                           " mobile:w-11/12"}
                       placeholder={"Wpisz nick gracza"}/>
                <button
                    className={"mt-5 rounded-full px-5 text-2xl h-12 w-5/12 bg-input text-border-primary" +
                        " focus:border-0 focus:outline-none" +
                        " placeholder:text-placeholder"}
                    onClick={onClick}>Szukaj
                </button>
            </form>
        </div>
    );
}

export default UsernamePrompt;