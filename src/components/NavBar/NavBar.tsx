import "./NavBar.css"
import { useState } from 'react';

export let NavBar = function() {
    const [onClickBool, setClickValue] = useState(true);

    function toggleNavBar() {
        setClickValue(false);
    }
    

    if (onClickBool) {
        return (
            <div onClick={toggleNavBar} className="NavBar">
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    } else {
        return (
            <div className="NavBarClicked">
                <div className="exitBtn"></div>
                <div className="linksContainer">
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Work</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};