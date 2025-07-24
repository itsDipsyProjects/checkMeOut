import "./FirstSection.css";
import { NavBar } from "@/components/NavBar/NavBar";

export let FirstSection:React.FC = function(){
    return(
        <div className="FirstSection">
           
            <div className="container">
                <NavBar></NavBar>
                <div className="containerForNamesAndImages">
                    <div className="firstName">Elliot</div>
                    <div className="backgroundImage"></div> 
                    <div className="lastName">Collins</div>
                </div>
            </div>
        </div>
    )
}