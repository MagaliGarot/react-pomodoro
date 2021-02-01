const React = require("react");
const ReactDOM = require("react-dom");
/////////////////////////////////////
import Welcome from "./components/welcome";
import Incrementer from "./components/incremeter";

///POMODORO///

function Home() {
    return (
        <div>
            <Welcome />
            <Incrementer />
        </div>
    );
}

ReactDOM.render(<Home />, document.querySelector("#app"));
