import "./FirstSection.css";
import { NavBar } from "@/components/NavBar/NavBar";
import { useRef, useEffect } from "react";

import "./FirstSection.css";

export function FirstName() {
    const myRef = useRef(null);

   useEffect(() => {
    let animationFrameId;
    const scrambleChars = "ABCDEFGHIJK";
    const targetWord = "Elliot";
    let lastUpdate = 0;
    const frameInterval = 50;
    let result = Array(targetWord.length).fill(""); // ["", "", "", "", "", ""]
    let done = false;
    

    const scramble = (timestamp) => {
        animationFrameId = requestAnimationFrame(scramble);
        if (timestamp - lastUpdate >= frameInterval) {
            lastUpdate = timestamp;
            
            for (let i = 0; i < targetWord.length; i++) {
                const delay = i * 200;
                const lockTime = delay + 400;

                if (timestamp > delay && timestamp < lockTime) {
                    result[i] = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                } else if (timestamp >= lockTime) {
                    result[i] = targetWord[i];
                    if(myRef.current.textContent === targetWord){
                        console.log("its done")
                        return cancelAnimationFrame(animationFrameId);
                    }
                }
            }
            
            myRef.current.textContent = result.join("");
        }

    };

    scramble();
    if(done){
        console.log(animationFrameId);
        
    }

}, []);


    return <div ref={myRef} className="firstName">Elliot</div>;
}

export function LastName() {
    const myRef = useRef(null);
    
    // TODO: Fatta denna kod för animationen var tydligen mer komplex än trott, testa och försök skriva den själv sen för nu är den lite gptad
     useEffect(() => {
        let animationFrameId;
        const scrambleChars = "ABCDEFGHIJKL";
        const targetWord = "Collins";
        let lastUpdate = 0;
        const frameInterval = 50;
        let result = Array(targetWord.length).fill(""); // ["", "", "", "", "", ""]
        let done = false;
        const scramble = (timestamp) => {
            animationFrameId = requestAnimationFrame(scramble);
            if (timestamp - lastUpdate >= frameInterval) {
                lastUpdate = timestamp;

                for (let i = 0; i < targetWord.length; i++) {
                    const delay = i * 200;
                    const lockTime = delay + 400;

                    if (timestamp > delay && timestamp < lockTime) {
                        result[i] = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                    } else if (timestamp >= lockTime) {
                        result[i] = targetWord[i];
                        if(myRef.current.textContent === targetWord){
                            console.log("its done")
                            return cancelAnimationFrame(animationFrameId);
                        }
                    }
                }
                myRef.current.textContent = result.join("");
                
            }
            
            
            
        };

        scramble();

    }, []);

    return <div ref={myRef} className="lastName">Collins</div>;
}


export let FirstSection = function(){
    return(
        <div className="FirstSection">
           
            <div className="container">
                <NavBar></NavBar>
                <div className="containerForNamesAndImages">
                    <FirstName></FirstName>
                    <div className="backgroundImage"></div> 
                    <LastName></LastName>
                </div>
            </div>
        </div>
    )
}