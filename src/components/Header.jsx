import React, { useState } from "react";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import AddAPhotoRoundedIcon from '@mui/icons-material/AddAPhotoRounded';

function Header() {
  const [addIconStyle, setaddIconStyle] = useState({
    color: "#fff",
    fontSize: "50px"
  });

  function MouseOver() {
    setaddIconStyle(() => {
      return (
        {
          fontSize: "50px",
          color: "#ff5c8d"
        }
      )
    });
  }
  function MouseOut() {
    setaddIconStyle(() => {
      return (
        {
          fontSize: "50px",
          color: "#fff"
        }
      )
    });
  }

  const windowWidth = window.innerWidth;

  return (
    <header>
      <h1>
        <a href="/">Destinations</a>
      </h1>

      <ul>
        <li>
          <a
            href="/places/new"
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
          >
            <AddAPhotoRoundedIcon style={addIconStyle} />
            {windowWidth > 500 ? <p>Add Place</p> : null}

          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
