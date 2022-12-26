import { useState } from "react";
import Buttons from "./Buttons";

function Calc() {

    const [LastAction, setLastAction] = useState("hey");
    const [Result, setResult] = useState("welcome!");


    const EqualAction = () => {
        const newResult = String(eval(Result))
        setLastAction(Result)
        if (newResult.length <= 12) {
            setResult(newResult)
        }
        else {
            setResult("UNSUPPORTED")
        }
    }

    const CleanAction = () => {
        setResult("0")
        setLastAction("none")
    }

    const simpleAction = (action) => {
        var specifics = ["+", "-", "*", "/"]
        if (Result !== "welcome!") {
            if (Result.length <= 12) {
                if (Result.startsWith("0") || Result === "UNSUPPORTED") {
                    setResult(String(action))
                } else if (String(action) === "0") {
                    if (Result.includes("*") || Result.includes("+") || Result.includes("/") || Result.includes("-")) {
                        if (specifics.findIndex(item => item === Result[Result.length - 1]) !== -1) {
                            //pass
                        } else {
                            setResult(r => r + String(action))
                        }
                    } else {
                        setResult(r => r + String(action))
                    }
                }
                else {
                    if (Result === "+" || Result === "-" || Result === "*" || Result === "/") {
                        setResult("0")
                    } else if (String(action) === "+" || String(action) === "-" || String(action) === "*" || String(action) === "/" || String(action) === ".") {
                        if (Result[Result.length - 1] === "+" || Result[Result.length - 1] === "*" || Result[Result.length - 1] === "-" || Result[Result.length - 1] === "/" || Result[Result.length - 1] === ".") {
                            //pass
                        } else {
                            setResult(r => r + String(action))
                        }
                    }
                    else {
                        setResult(r => r + String(action))
                    }
                }
            }
        } else if (Result === "welcome!") {
            setResult(String(action))
            setLastAction("none")
        }
    }

    const AbsLike = () => {
        setResult(r => String(eval(r) * -1))
    }

    const SqrAction = () => {
        const e = eval(Result)
        const newResult = String(e * e)
        if (newResult.length <= 12) {
            setResult(r => eval(r) * eval(r))
        } else {
            setResult("UNSUPPORTED")
        }

    }

    const BackAction = () => {
        setResult(r => r.slice(0, -1))
    }

    return (
        <>

            <div className="container">

                <div className="result">
                    <span>{LastAction}</span>
                    <p dir="rtl">{Result}</p>
                </div>

                <Buttons BA={BackAction} SQA={SqrAction} SA={simpleAction} AL={AbsLike} CA={CleanAction} EA={EqualAction} />
            </div>
        </>
    );
}

export default Calc;