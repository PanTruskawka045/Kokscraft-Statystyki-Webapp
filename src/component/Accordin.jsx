import React, {useEffect, useRef, useState} from "react";
import ExpandMoreIcon from "./icon/ExpandMoreIcon";
import {animated, useSpring} from "react-spring";

function Accordion({title, children, open = false, topGap = 0}) {

    const [active, setActive] = useState(open);
    const childrenRef = useRef(null);
    const [childrenHeight, setChildrenHeight] = useState(0);

    useEffect(() => {
        setChildrenHeight(childrenRef?.current?.scrollHeight);
    }, [childrenRef]);

    const openAnimation = useSpring({
        from: {opacity: "0", maxHeight: "0px"},
        to: {opacity: "1", maxHeight: active ? `${childrenHeight}px` : "0px"},
        config: {duration: 300}
    });

    const iconAnimation = useSpring({
        from: {
            transform: "rotate(180deg)",
        },
        to: {
            transform: active ? "rotate(0deg)" : "rotate(180deg)",
        },
        config: {duration: "300"}
    });

    let toggleAccordion = () => {
        setActive(!active);
    };

    return (
        <div className={`rounded-xl border-2 border-solid border-border-primary overflow-hidden mt-${topGap}`}>
            <div
                className={"cursor-pointer bg-border-primary flex overflow-hidden p-4 items-center font-[900] text-text-primary text-3xl pl-4"}
                onClick={toggleAccordion}>
                <span>{title}</span>
                <animated.div style={iconAnimation} className="ml-auto">
                    <ExpandMoreIcon/>
                </animated.div>
            </div>
            <animated.div style={openAnimation} className="bg-text-primary" ref={childrenRef}>
                <div className={"p-4"}>
                    {children}
                </div>
            </animated.div>
        </div>
    );


}


export default Accordion;
