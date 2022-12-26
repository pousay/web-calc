

const simpleActionButtons = [7, 8, 9, "-", 4, 5, 6, "*", 1, 2, 3, "+"]
const simpleActionButtons2 = [0, "."]
function Buttons({ SA, EA, CA, AL, SQA, BA }) {

    const simpleBtnsElm = simpleActionButtons.map(btn => <button key={btn} onClick={() => SA(btn)} className="btn">{btn}</button>)
    const simpleBtnsElm2 = simpleActionButtons2.map(btn => <button key={btn} className="btn" onClick={() => SA(btn)}>{btn}</button>)

    return (
        <>
            <div className="action">
                <button className="btn sp-text" onClick={CA}>c</button>
                <button className="btn sp-text" onClick={SQA}>x<sup>2</sup></button>
                <button className="btn sp-text" onClick={() => { SA("/") }}>/</button>
                <button onClick={BA} className="btn sp-text x">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        className="bi bi-backspace-fill" viewBox="0 0 16 16">
                        <path
                            d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z" />
                    </svg>
                </button>
                {simpleBtnsElm}
                <button className="btn" onClick={AL}>+/-</button>
                {simpleBtnsElm2}
                <button className="btn equal" onClick={EA}>=</button>
            </div>
        </>
    );
}

export default Buttons;