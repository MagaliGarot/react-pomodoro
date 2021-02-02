const React = require("react");
const ReactDOM = require("react-dom");
/////////////////////////////////////
import Welcome from "./components/welcome";
import Incrementer from "./components/incrementer";

import App from "./modal/modalapp.js";

///POMODORO///

function Home() {
    return (
        <div>
            <Welcome />
            <Incrementer />
            <App />
        </div>
    );
}

ReactDOM.render(<Home />, document.querySelector("#app"));
