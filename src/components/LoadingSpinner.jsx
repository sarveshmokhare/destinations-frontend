import React from "react";

export default function LoadingSpinner() {
    return (
        <div className="spinner-container">
            <div className="lds-default">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
        </div>
    );
}