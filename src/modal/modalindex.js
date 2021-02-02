//https://www.kaherecode.com/tutorial/creer-votre-propre-composant-modal-avec-react-hooks

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.querySelector("#root");
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    rootElement,
);
