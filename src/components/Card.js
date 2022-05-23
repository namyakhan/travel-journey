import React from "react";
import { MdLocationOn } from "react-icons/md";

export default function Card(props) {
  return (
    <div>
      <div className="card">
        <img src={props.imageUrl} alt="cover" />
        <div className="card--stats">
          <MdLocationOn size={20} color="#f55a5a" />
          <span>{props.location}</span>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
          <h1 className="card--title">{props.title}</h1>
          <div className="desc">
            <strong className="duration">
              {props.startDate} - {props.startDate}
            </strong>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
