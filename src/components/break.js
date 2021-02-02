const React = require("react");

class Break extends React.Component {
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

    render() {
        function fiveMinute(param) {
            const minutes = Math.floor(param / 60);
            const seconds = ((param % 60) / 1).toFixed(0);
            return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        }
        return (
            <>
                <div className={"compteurBreak"}>
                    {fiveMinute(this.state.n)}
                </div>
                <div className={"breakContainer"}>
                    {this.state.timer ? (
                        <button
                            className={"breakButton"}
                            type={"button"}
                            onClick={this.pause.bind(this)}>
                            {"Pause"}
                        </button>
                    ) : (
                        <button
                            className={"breakButton"}
                            type={"button"}
                            onClick={this.play.bind(this)}>
                            {"Start"}
                        </button>
                    )}
                </div>
            </>
        );
    }
}

Break.defaultProps = {
    start: 300,
    step: 1,
};

export default Break;
