import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card " >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Project name:</strong> {props.name}
        </li>
        <li>
          <strong>Description:</strong> {props.description}
        </li>
        <li>
          <a href={props.app} target="blank">  <strong> <span className="fa fa-external-link"/> View Live App </strong> </a>
        </li>
        <li>
         <a href={props.repo} target="blank"><strong><span className="fa fa-github" /> View Repository</strong> </a>
        </li>
      </ul>
    </div>
    {/* <span className="remove" onClick={()=> props.removeFriend(props.id)} >𝘅</span> */}
  </div>
);

export default FriendCard;
