import Calc from "./components/calc";
import Circle from "./components/circle"
function App() {
    document.body.classList.add("dark")
    return (
        <>
            <Circle />
            <Calc />
        </>
    );
}

export default App;