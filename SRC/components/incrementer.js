const React = require("react");
///////////////////////////////

class Incrementer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {n: props.start, timer: null};
        this.timer = null;
    }

    componentDidMount() {
        this.play();
    }

    componentWillUnmount() {
        window.clearInterval(this.state.timer);
    }

    increment() {
        this.setState((state, props) => ({n: state.n - props.step}));

        //si ça arrive à 0 stop
        if (this.state.n === 0) {
            window.clearInterval(this.state.timer);
            this.setState({
                timer: null,
            });
        }
    }

    pause() {
        window.clearInterval(this.state.timer);
        this.setState({
            timer: null,
        });
    }

    play() {
        this.setState({
            timer: window.setInterval(this.increment.bind(this), 1000),
        });
    }

    manDecrement(e) {
        if (this.state.n <= 100) {
            window.clearInterval(this.state.timer);
            this.setState({
                timer: null,
            });
        } else {
            e.preventDefault();
            this.setState((state, props) => ({n: state.n - props.step * 60}));
        }
    }

    manIncrement(e) {
        e.preventDefault();
        this.setState((state, props) => ({n: state.n + props.step * 60}));
    }

    reset() {
        // avec  this pause et this play c'est plus fluide
        this.pause();
        this.play();
        this.setState((state, props) => ({n: props.start}));
    }

    render() {
        function toMinutesAndSeconds(param) {
            const minutes = Math.floor(param / 60);
            const seconds = ((param % 60) / 1).toFixed(0);
            return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        }
        return (
            <div className={"pomodoroApp"}>
                <div className={"pomodoroApp__setTime"}>
                    <button
                        type={"button"}
                        className={"pomodoroApp__setTimeUp"}
                        onClick={
                            this.state.timer == null
                                ? this.manDecrement.bind(this)
                                : null
                        }>
                        {"-"}
                    </button>
                    <button
                        type={"button"}
                        className={"pomodoroApp__setTimeDwn"}
                        onClick={this.manIncrement.bind(this)}>
                        {"+"}
                    </button>
                </div>
                <div className={"compteur"}>
                    {toMinutesAndSeconds(this.state.n)}
                </div>
                <div className={"pomodoroApp__IncrDecr"}>
                    {this.state.timer ? (
                        <button type={"button"} onClick={this.pause.bind(this)}>
                            {"Pause"}
                        </button>
                    ) : (
                        <button type={"button"} onClick={this.play.bind(this)}>
                            {"Play"}
                        </button>
                    )}
                    <button type={"button"} onClick={this.reset.bind(this)}>
                        {"Reset"}
                    </button>
                </div>
            </div>
        );
    }
}

Incrementer.defaultProps = {
    //par défaut 1500 secondes
    start: 1500,
    step: 1,
};

export default Incrementer;
