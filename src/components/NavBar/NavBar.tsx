import "./NavBar.css";
import { useState } from "react";
import { useRef } from "react";

export let NavBar = function () {
  let navBarRef = useRef(null);

  
  const [onClickBool, setClickValue] = useState(true);
  const [animateClose, setAnimateClose] = useState(false);

  function toggleOnNavBar() {
    setClickValue(false);
  }

  function toggleOffNavBar() {
    setAnimateClose(true); // trigger slideOut

    let setTimeoutID = setTimeout(() => {
        setClickValue(true);
        setAnimateClose(false);
        clearTimeout(setTimeoutID)
    }, 300); 

  }

  if (onClickBool) {
    return (
      <div onClick={toggleOnNavBar} className="NavBar">
        <span></span>
        <span></span>
      </div>
    );
  } else {
    
    return (
      <>
        <div onClick={toggleOffNavBar} className="exitBtn">
            <span></span>
            <span></span>
        </div>
        <div className={`NavBarClicked ${animateClose ? "slideOut" : ""}`}>
          <div className="linksContainer">
            <div className="test">
              <p>Navigation</p>
              <div className="navLine1"></div>
            </div>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Work</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
            </ul>

            <div className="test2">
              <p>Socials</p>
              <div className="navLine2"></div>
              <ul>
                <li className="insta"></li>
                <li className="github"></li>
                <li className="linkedIn"></li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
};
