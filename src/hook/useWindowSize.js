//https://github.com/uidotdev/usehooks/blob/main/index.js

import {useLayoutEffect, useState} from "react";

function useWindowSize() {
    const [size, setSize] = useState({
        width: null,
        height: null,
    });

    useLayoutEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return size;
}

export default useWindowSize;