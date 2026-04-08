import{useEffect, useState} from "react";


export const LoadingScreen = ({onComplete})=>{

    const[text, setText] = useState("");
    const fullText= "Welcome to P&M Technologies";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() =>{
            setText(fullText.substring(0, index));
            index++;

            if(index > fullText.length){
                clearInterval(interval)

                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return() => clearInterval(interval)
    }, [onComplete]);



    return(
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-slate-950 text-gray-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.18),transparent_24%)]" />

            <div className="relative mb-5 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200">
                P&M Technologies
            </div>

            <div className="relative mb-4 text-center text-3xl font-semibold tracking-tight text-white md:text-5xl">
                {text} <span className="animate-blink ml-1 text-cyan-300">|</span>
            </div>

            <div className="relative w-[240px] overflow-hidden rounded-full border border-white/10 bg-white/5 p-1">
                <div className="h-[3px] w-[40%] rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.65)] animate-loading-bar">
                    {""}
                </div>
            </div>
        </div>
    );
};