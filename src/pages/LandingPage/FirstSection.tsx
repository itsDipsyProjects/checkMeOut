import "./FirstSection.css";
import { NavBar } from "@/components/NavBar/NavBar";

export let FirstSection:React.FC = function(){
    return(
        <div className="FirstSection">
           
            <div className="container">
                <div className="firstName">
                    <div className="h">Elliot</div>
                    <NavBar></NavBar>
                </div>
                <div className="backgroundImage"></div>
                <div className="lastName">Collins</div>
            </div>
        </div>
    )
}