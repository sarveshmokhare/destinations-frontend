import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Place(props) {

  function triggerModal(){
    props.modalHandler(props._id, props.index, props.place);
  }

  function onDelete(){
    props.deletePlace(props._id, props.index)
  }

  return (
    <div className="place-container">
      <img alt="destination" src={props.url} onClick={triggerModal} />
      <div className="delete-icon" onClick={onDelete} ><DeleteIcon /></div>
      <div className="place-name">{props.place}</div>
      <div className="person-name">From {props.name}</div>
    </div>

  );
}

export default Place;
