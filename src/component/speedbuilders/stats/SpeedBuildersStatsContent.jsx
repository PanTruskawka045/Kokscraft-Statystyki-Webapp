import {Link} from "react-router-dom";

function SpeedBuildersStatsContent({data, schematics}) {

    const schematicName = (id) => schematics.blueprints[`${id}`] || `Nieznany Schemat ${id}`;

    return <div className={"p-8 w-full"}>
        <div className={"bg-text-primary rounded-xl p-4 pt-2"}>
            <div className={"w-full grid grid-cols-2"}>
                <span className={"text-2xl font-bold text-border-primary"}>Budowla</span>
                <span className={"text-2xl font-bold text-border-primary"}>Czas</span>
                <hr className={"col-span-2"}/>
                {Object.keys(data.stats).map((stats, index) => {
                    let stat = data.stats[stats];
                    return <>
                        <Link to={`/speedbuilders/leaderboards/${stats}`}>
                            <span className={`${index % 2 === 1 ? 'text-border-primary' : 'text-border-secondary'}`}>{schematicName(stats)}</span>
                        </Link>
                        <span className={`${index % 2 === 1 ? 'text-border-primary' : 'text-border-secondary'}`}>{formatTime(stat.time)} {getMedalForPlace(stat.place)}</span>
                    </>;
                })}
            </div>
        </div>
    </div>;
}

function getMedalForPlace(place) {
    if(place > 3 && place <= 100) {
        return `(${place}🏅)`;
    }
    switch (place) {
        case 1:
            return "🥇";
        case 2:
            return "🥈";
        case 3:
            return "🥉";
        default:
            return "";
    }
}

const formatTime = (time) => `${time/20}s`

export default SpeedBuildersStatsContent;