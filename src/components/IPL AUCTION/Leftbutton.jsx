import { FaArrowCircleLeft } from "react-icons/fa";
import React,{ useEffect } from "react";

function LeftButton({indx, setIndex, len}) {

    async function clickHandler() {
        let newIndex = indx - 1;
        if (newIndex < 0) {
            newIndex = len - 1;
        }
        setIndex(newIndex);
    }

    useEffect(() => {
        const keyHandler = (e) => {
            if (e.key === "ArrowLeft") {
                let newIndex = indx - 1;
                if (newIndex < 0) {
                    newIndex = len - 1;
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
            <FaArrowCircleLeft size={50} onClick={clickHandler}></FaArrowCircleLeft>
        </div>
    );
}

export default LeftButton;
