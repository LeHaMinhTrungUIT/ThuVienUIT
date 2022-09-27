import React from "react";
import slider1 from '../img/slider1.png';
import slider2 from '../img/slider2.png';
import slider3 from '../img/slider3.png';
function Slider() {
    return (
        <div className="body">
            <div className="slider">
                <div className="slides">
                    <input type="radio" name="radio-btn" id="radio1"></input>
                    <input type="radio" name="radio-btn" id="radio2"></input>
                    <input type="radio" name="radio-btn" id="radio3"></input>

                    <div className="slide first">
                        <img src={slider1}></img>
                    </div>

                    <div className="slide">
                        <img src={slider2}></img>
                    </div>

                    <div className="slide">
                        <img src={slider3}></img>
                    </div>

                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                    </div>
                </div>
                <div className="navigation-manual">
                    <label for="radio1" className="manual-btn"></label>
                    <label for="radio2" className="manual-btn"></label>
                    <label for="radio3" className="manual-btn"></label>
                </div>
            </div>
        </div>
    );
}

export default Slider;