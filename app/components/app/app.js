import './app.css'

const App = (props) => {
    return (
        <div className="center">
            <h1>React Redux Boilerplate</h1>
            <span onClick={props.onUnicornClick}>{props.unicorns}</span>
        </div>
    )
};

export default App;
