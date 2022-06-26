import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddPlace() {

  const [place, setPlace] = useState({
    name: "",
    place: "",
    url: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setPlace((prevPlace) => {
      return (
        {
          ...prevPlace,
          [name]: value
        }
      )
    });
  }

  function handleImg(event) {

    setPlace(prevPlace => {
      return ({
        ...prevPlace,
        url: event.target.files[0]
      })
    })
  }

  const navigate = useNavigate();

  function submitPlace(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", place.name);
    formData.append("place", place.place);
    formData.append("uploadedPhoto", place.url);

    console.log(place.name);
    console.log(place.place);
    console.log(place.url);
    
    setPlace({
      name: "",
      place: "",
      url: ""
    })
    
    axios.post(process.env.REACT_APP_BACKEND_URL + "/api/add/place", formData)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err.response.data);
    })
    
    navigate("/");
  }

  return (
    <div className="main-box-of-add-place-page">
      <form className="submit-box" onSubmit={submitPlace} method="POST" encType="multipart/form-data">
        <h1>Add a new Place</h1>
        <input
          placeholder="Enter your Name"
          type="text"
          name="name"
          value={place.name}
          onChange={handleChange}
        />
        <input
          placeholder="Enter the Place Name"
          type="text"
          name="place"
          value={place.place}
          onChange={handleChange}
        />
        <p for="img">Select the Place Image:</p>
        <input
          type="file"
          name="uploadedPhoto"
          accept="image/*"
          onChange={handleImg}
        />
        <button type="submit">Submit</button>
      </form>


    </div>
  );
}

export default AddPlace;
