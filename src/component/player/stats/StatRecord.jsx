import React from "react";


function StatRecord({title, children}) {
    return (
        <div className={"text-xl text-border-primary mobile:text-base"}>
            <span className={"font-[900]"}>{title}</span>
            {children}
        </div>
    )
}

export default StatRecord;