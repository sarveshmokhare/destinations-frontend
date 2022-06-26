import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function ModalBox(props) {

    function handleClick(){
        props.changeShowState();
    }

    return (
        <div className="modal-container">
            <div className="modal-image-box">
                <img
                    alt="destination_picture"
                    src={props.src}
                />
                <div className="close-icon" onClick={handleClick}>
                    <CloseRoundedIcon  />
                </div>
            </div>

            <div className="modal-content">
                <h2>{props.placeName}</h2>
                <p>The temperature here is {props.temp} degree Celsius and the weather consists mostly of {props.weatherDescrip}!</p>
                <p>Uploaded by {props.personName}</p>
            </div>
        </div>
    );
}

export default ModalBox;
