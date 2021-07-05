import React from "react";
import Avatar from "./Avatar";
import Details from './Details';


function Card(prop){
  return(
    <div>
      <div className="card">
        <div className="top">
          <h2 className='name'>{prop.name}</h2>
          <Avatar
          imgURL = {prop.imgURL} />
        </div>
        <div className="bottom">
          <Details
          detail={prop.email} />
          <Details
          detail={prop.phone} />
        </div>
      </div>
    </div>
  );
}

export default Card;