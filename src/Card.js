import React, { useState } from "react";


export default function Card(props) {

  
 
  const [disable, setDisable] = useState(false);
  

  
  return (
    <div className="col-lg-4 my-1">
      <div class="card bg-dark text-white mx-0  ">
        <img
          class="card-img-top"
          src={props.data.image}
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{props.data.title}</h5>
          <p class="card-text">{props.data.description}</p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <p class="card-text">
            {" "}
            Price :$
            {props.data.price}
          </p>
          <button
            href="#"
            class="btn btn-primary"
            disabled={disable}

            onClick={() => {
              setDisable(true)
              props.handleCart(props.data.id);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
