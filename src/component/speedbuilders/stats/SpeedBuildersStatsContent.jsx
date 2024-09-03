
function SpeedBuildersStatsContent({data, schematics}) {

    const schematicName = (id) => schematics.blueprints[`${id}`] || `Nieznany Schemat ${id}`;

    return <div className={"p-8 w-full"}>
        <div className={"bg-text-primary rounded-xl p-4 pt-2"}>
            <div className={"w-full grid grid-cols-2"}>
                <span className={"text-2xl font-bold text-border-primary"}>Budowla</span>
                <span className={"text-2xl font-bold text-border-primary"}>Czas</span>
                <hr className={"col-span-2"}/>
                {Object.keys(data.stats).map((stats, index) => {
                    return <>
                        <span className={`${index % 2 === 1 ? 'text-border-primary' : 'text-border-secondary'}`}>{schematicName(stats)}</span>
                        <span className={`${index % 2 === 1 ? 'text-border-primary' : 'text-border-secondary'}`}>{formatTime(data.stats[stats])}</span>
                    </>;
                })}
            </div>
        </div>
    </div>;
}

const formatTime = (time) => `${time/20}s`

export default SpeedBuildersStatsContent;