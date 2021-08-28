import React from "react";

export default function Cartitem(props) {
  return (
    
    <li class="list-group-item d-flex justify-content-between align-items-center bg-dark text-white">
      <h6>{props.data.title}</h6>
      <h6 class="card-text"> $ {props.data.price}</h6>
      <span
        class="badge badge-primary badge-pill"
        style={{ cursor: "pointer" }}
        onClick={() => {
          props.handleRemove(props.data.id) 
          
        }}
      > 
       X 
      </span>
    </li>
  );
}
