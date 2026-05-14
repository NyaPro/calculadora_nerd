import { useState } from "react";
import { evaluate } from "mathjs";

export function Calculator(){
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value) => {
        setInput(input + value);
    };

    const handleCalculate = () => {
        try {
            if (!input) return;
            const evalResult = evaluate(input);
            setResult(evalResult.toString());
            setInput(evalResult.toString()); // Opcional: mostra o resultado no input também
        } catch (error) {
            setResult("Error");
            console.error(error);
        }
    };
    
    const handleClear = () => {
        setInput("");
        setResult("");
    };

    const handleDelete = () => setInput((prev) => prev.slice(0, -1));

    return (
        <div className="grid shadow-md w-[360px] text-2xl font-bold">
            <div className="text-center p-2 bg-[#CCD5AE] text-white">
            </div>
            <div className="bg-[#CCD5AE] text-white min-h-[180px] grow flex flex-col justify-end items-end p-8 gap-4">
                <span className="flex w-fit justify-self-end text-xl break-all max-w-full">{input || "0"}</span>
                <div className="flex justify-between w-full items-center text-5xl">
                    <span>=</span>
                    <span className="text-3xl break-all max-w-[70%] text-right">{result}</span>
                </div>
            </div>
            <div className="bg-white grow h-[480px] grid grid-cols-4">

                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#E9EDC9] p-4"
                onClick={() => handleClick("+")}
                >☝
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#E9EDC9] p-4"
                onClick={() => handleClick("-")}
                >👇
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#E9EDC9] p-4"
                onClick={() => handleClick("*")}
                >✌
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#E9EDC9] p-4"
                onClick={() => handleClick("/")}
                >🤞
                </button>

                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] p-4"
                onClick={() => handleClick("7")}
                >7
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] p-4"
                onClick={() => handleClick("8")}
                >8
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] p-4"
                onClick={() => handleClick("9")}
                >9
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] p-4"
                onClick={handleDelete}
                >🔪
                </button>

                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] p-4"
                onClick={() => handleClick("4")}
                >4
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] p-4"
                onClick={() => handleClick("5")}
                >5
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] p-4"
                onClick={() => handleClick("6")}
                >6
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] p-4"
                onClick={handleCalculate}
                >🫴
                </button>

                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] p-4"
                onClick={() => handleClick("1")}
                >1
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] p-4"
                onClick={() => handleClick("2")}
                >2
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] p-4"
                onClick={() => handleClick("3")}
                >3
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] p-4"
                onClick={handleClear}
                >🗑️
                </button>

                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] p-4 col-span-2"
                onClick={() => handleClick("0")}
                >0
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] p-4"
                onClick={() => handleClick(".")}
                >.
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] p-4"
                onClick={() => handleClick("(")}
                >👉
                </button>
                <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] p-4"
                onClick={() => handleClick(")")}
                >👈
                </button>
            </div>
        </div>
    );
}