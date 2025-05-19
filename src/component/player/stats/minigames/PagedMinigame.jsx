import React, {useState} from "react";
import ExpandMoreIcon from "../../../icon/ExpandMoreIcon";

function PagedMinigame({data, schema, formatted}) {

    const [currentSchemaItem, setCurrentSchemaItem] = useState((schema.seasons.length) - 1);

    const forward = () => {
        let nextItem = currentSchemaItem + 1;
        if (nextItem >= schema.seasons.length) {
            nextItem = 0;
        }
        setCurrentSchemaItem(nextItem);
    }

    const backwards = () => {
        let nextItem = currentSchemaItem - 1;
        if (nextItem < 0) {
            nextItem = schema.seasons.length - 1;
        }
        setCurrentSchemaItem(nextItem);
    }

    let overallComponent = formatted(data.overall);
    return (
        <>
            <h2 className={"font-[900] text-3xl text-border-primary mobile:text-2xl"}>Ogólne</h2>
            {overallComponent}
            {schema.seasons && (
                <>
                    <div className={"flex justify-center"}>
                        <div className={"w-3/5 min-w-[min(100%,384px)] flex flex-row gap-x-2"}>
                            <div onClick={backwards}
                                 className={"w-12 h-12 mobile:h-10 mobile:w-10 rounded bg-border-primary text-text-primary rotate-90 flex justify-center items-center cursor-pointer hover:scale-105 transition-transform"}>
                                <ExpandMoreIcon size={40} className={"mobile:w-8 mobile:h-8"}/>
                            </div>
                            <div
                                className={"grow h-12 mobile:h-10 text-center flex justify-center items-center bg-border-primary text-text-primary rounded"}>
                                <span className={"text-xl fond-bold mobile:text-base"}>{schema.seasons[currentSchemaItem].name}</span>
                            </div>
                            <div onClick={forward}
                                 className={"w-12 h-12 mobile:h-10 mobile:w-10 rounded bg-border-primary text-text-primary rotate-270 flex justify-center items-center cursor-pointer hover:scale-105 transition-transform"}>
                                <ExpandMoreIcon size={40} className={"mobile:w-8 mobile:h-8"}/>
                            </div>
                        </div>
                    </div>
                    <div className={"flex flex-row mobile:flex-col flex-grow mt-2"}>
                        {schema.seasons[currentSchemaItem].stats.map((stat, index) => {
                            let name = stat.name;
                            let api = stat.api;
                            let seasonData = data[api];
                            let component = formatted(seasonData);
                            return <div className={"flex-grow"}>
                                <h2 className={"font-[900] text-3xl text-border-primary mobile:text-2xl"}>{name}</h2>
                                {component}
                            </div>;
                        })}
                    </div>
                </>
            )}
        </>
    );

}

export default PagedMinigame;