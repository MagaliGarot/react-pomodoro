import React from "react";
import useModal from "./usemodal";
import Modal from "./modal";

export default function App() {
    const {isShowing: isLoginFormShowed, toggle: toggleLoginForm} = useModal();

    return (
        <>
            <div className={"App"}>
                <button
                    className={"pauseButton"}
                    type={"button"}
                    onClick={toggleLoginForm}>
                    {"☕"}
                </button>

                <Modal isShowing={isLoginFormShowed} hide={toggleLoginForm} />
            </div>
        </>
    );
}
