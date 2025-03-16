import { FaArrowCircleRight } from "react-icons/fa";
import React, { useEffect } from "react";

function RightButton({indx, setIndex, len}) {

    async function clickHandler() {
        let newIndex = indx +1;
        if (newIndex > len) {
            newIndex = 0;
        }
        setIndex(newIndex);
    }

    useEffect(() => {
        const keyHandler = (e) => {
            if (e.key === "ArrowRight") {
                let newIndex = indx + 1;
                if (newIndex >= len) {
                    newIndex = 0;
                }
                setIndex(newIndex);
            }
        };

        document.addEventListener('keydown', keyHandler);

        return () => {
            document.removeEventListener('keydown', keyHandler);
        };
    }, [indx, len, setIndex]);

    return(
        <div>
            <FaArrowCircleRight size={50} onClick={clickHandler}></FaArrowCircleRight>
        </div>
    );
}

export default RightButton;
