import React from "react";
//import Car1 from "../Images/Toyota.jpg";
//import automatic from "../Images/automatic.png";
//import fuel from "../Images/fuel.png";
//import people from "../Images/people.png";
//import speed from "../Images/speed.png";
//import like from "../Images/like.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Card.css';
 export default function CarCard({id,carimage,year,feul,carname,speeds,steering,peoples,price}){
    return(
        <>
        <div  className="m-3"  id="card" >
        <img  src={carimage} alt="" id="CarImage"/>
        <div className="d-flex">
        <h3 className="m-3">{carname}</h3>
        <div className="m-3 " id="year">
            <h5>{year}</h5>
        </div>
      </div>

      <div class="layout">
  <div className="ml-2 d-flex">
    <img src="Images/people.png" alt="" id="icon"/>
    <p>{peoples} people</p>
    </div>
  <div class=" d-flex">
  <img src="Images/fuel.png" alt=""  id="icon"/>
    <p>{feul}</p></div>
  <div class= "ml-2 d-flex">
  <img src="Images/speed.png" alt=""  id="icon"/>
    <p>{speeds}</p></div>
  <div className="d-flex">
  <img src="Images/automatic.png"alt=""  id="icon"/>
    <p>{steering}</p></div>

</div>
<div class="line"></div>

<div className="d-flex ">
<h4 className="d-flex m-2" >{price}/<h6>month</h6></h4>
<button className="btn rounded-4 " id="LikeButton" ><img src="Images/like.png" alt="" id="icon"/></button>
<button type="button" class="btn btn-primary rounded-4 ">Rent Now</button>
   
    </div>

      
      
        </div>
     </>
    )
 }