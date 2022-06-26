import React, { useState, useEffect } from "react";
import axios from "axios";

import Place from "./Place";
import PlaceModalBox from "./PlaceModalBox"
import LoadingSpinner from "./LoadingSpinner";

function AllPlaces() {

    const [isLoading, setIsLoading] = useState(false);

    const [show, setShow] = useState(false);

    const [placeId, setPlaceId] = useState("");
    const [placeIndex, setPlaceIndex] = useState(-1);

    const [places, setPlaces] = useState([{
        place: "Mount Kilimanjaro, Tanzania",
        name: "Jay",
        url: "https://media.cntraveler.com/photos/60596bca7ef97a43a1af2c99/master/w_1920%2Cc_limit/Kilimanjaro-GettyImages-1249566598.jpg",
        key: "randomkey-sdf67sfd67dsf8fsda"
    }, {
        place: "Arashiyama Bamboo Grove, Japan",
        name: "Tara",
        url: "https://media.cntraveler.com/photos/5cb63a091a7e70293bf7094b/master/w_1920%2Cc_limit/Arashiyama-Japan_GettyImages-687644524.jpg",
        key: "randomkey-sdf67sf8fsda"
    }, {
        place: "Namib Desert, Namibia",
        name: "Aisha",
        url: "https://media.cntraveler.com/photos/5cb63a2d7b743ba94b60a8e0/master/w_1920%2Cc_limit/Namib-Desert%2C-Namibia_GettyImages-139814922.jpg"
    }]);
    //Showing Modal Box based on which place clicked
    const opaqueBox = document.getElementById("OPAQUE");
    //Detecting which place clicked and showing that modal box with those particular entries and enabling opaque box which greys out everything behind
    const [query, setQuery] = useState("Mumbai");
    function handleModal(_id, index, place) {
        setShow(true);
        setPlaceId(_id);
        setPlaceIndex(index);
        opaqueBox.style.display = "block"
        //Function to return the last word of the place name
        function getLastWord(string) {
            const n = string.split(" ");
            return n[n.length - 1];
        }
        const properPlace = getLastWord(place);
        setQuery(properPlace);
    }
    //Reseting everything when user click on cross button
    function showChangeHandler() {
        setShow(false);
        opaqueBox.style.display = "none"
    }
    //Reseting everything when user click on outside modal box ie on opaque box
    if (show) {
        opaqueBox.onclick = function () {
            setShow(false);
            opaqueBox.style.display = "none"
        }
    }

    const [openWeatherMapAPIKey, setOpenWeatherMapAPIKey] = useState("");
    useEffect(() => {
        setIsLoading(true);
        axios.get(process.env.REACT_APP_BACKEND_URL + "/api/places")
            .then(res => {
                setPlaces(places.concat(res.data));
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })

        axios.get(process.env.REACT_APP_BACKEND_URL + "/api/openweathermap/api/key")
            .then(res => {
                setOpenWeatherMapAPIKey(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    //Deleting a place
    function handleDelete(_id, placeIndex) {
        axios.delete(process.env.REACT_APP_BACKEND_URL + "/api/delete/" + _id)
        setPlaces((prevPlaces) => {
            return (
                prevPlaces.filter((placeItem, index) => {
                    return index !== placeIndex;
                })
            )
        })
            .catch(err => {
                console.log(err);
            })
    }

    //Weather API
    const apiKey = openWeatherMapAPIKey;
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;

    const [weatherDescription, setWeatherDescription] = useState("");
    const [temperature, setTemperature] = useState(null);

    //Getting weather info only when modal is shown(opened)
    show ?
        axios.get(url)
            .then(res => {
                setWeatherDescription(res.data.weather[0].description);
                setTemperature(res.data.main.temp);
            })
            .catch(err => {
                console.log(err);
            })
        :
        null

    const renderPlaces = (
        <div className="all-places-container">

            {show ?
                <PlaceModalBox
                    src={places[placeIndex].url}
                    placeName={places[placeIndex].place}
                    personName={places[placeIndex].name}
                    temp={temperature}
                    weatherDescrip={weatherDescription}
                    changeShowState={showChangeHandler}
                />
                : null}

            {places.map((placeItem, index) => {
                return (
                    <Place
                        key={index}
                        _id={placeItem._id}
                        index={index}
                        url={placeItem.url}
                        place={placeItem.place}
                        name={placeItem.name}
                        modalHandler={handleModal}
                        deletePlace={handleDelete}
                    />
                )
            })}

        </div>
    )

    return (
        <div>
            {isLoading ? <LoadingSpinner /> : renderPlaces}
        </div>

    )

}

export default AllPlaces;