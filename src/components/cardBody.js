import React from "react";
import ReactDOM from "react-dom/client"
// import array from "../../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import {url} from "../../utils/mockData";
import Shimmer from "./shimmer";
// -----------------------onecard-data-----------------------

const Card=(props)=>( <div className="box">
<img className="food-img" src={url+props.data.info.cloudinaryImageId}></img>
<h3 className="place">{props.data.info.name} </h3>
<h3 className="rating">{props.data.info.avgRating} <span><i className="bi bi-star-fill"></i> </span>4.<span>22min</span></h3>
<p className="hotel">{props.data.info.cuisines.join(",")} </p>
<p className="room">{props.data.info.locality} </p>
<p className="room"><b>$</b> {props.data.info.feeDetails.fees[0].fee/10.} </p>


</div>)
// ------------------card-flx data--------------------
  const CardFlex=()=>{
  const [resto,setresto]=useState([])
  const [search,setsearch]=useState("")

  async function swiggy(){
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6287557&lng=79.4191795&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const originalData=await data.json()
  // console.log(originalData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
  setresto(originalData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
 }
   useEffect(()=>{
   swiggy()
   },[])
// ------------------ -------filter-btns------------------------
  if(resto.length==0){
    return <Shimmer/>
  } 
  else{
    return <div>
      <div className="filter-contaier">
      <button className="filter-btn" onClick={()=>{
       const aboveFour= resto.filter((x)=>{
          return x.info.avgRating>4
         })
         setresto(aboveFour)
      }}>Ratings 4.0+</button>
      <button className="filter-btn" >Rs. 300-Rs. 600</button>
      <button className="filter-btn" onClick={()=>{
        const btwn=resto.filter((y)=>{
          return y.info.feeDetails.fees[0].fee/10<300
        })
        setresto(btwn)
      }}>Less than Rs. 300</button>
{/* -------------------search-bar----------------- */}
     <div className="search-container">
     <input className="input" placeholder="Enter Ur Favrt Foood..." value={search} onChange={(z)=>{
      setsearch(z.target.value)
      console.log(search)
     }}></input>
     <button onClick={()=>{
     const fil=resto.filter((x)=>{
      if(search.length==0){
        <div>
          <h1>not found....</h1>
        </div>
        return 
             <h1/>
}
   else{
  return x.info.name.toLowerCase().includes(search.toLowerCase())
}
    })
      setresto(fil)
     }}className="s-btn" >Search</button>
      </div>
      </div>

{/* ------------------card-flex---------------- */}
      <div className="card-flex">
      {  resto.map((x)=>{
        return <Card data={x}/>
       })}
       </div>
    </div>
  }
}
  //  ---------------cordbody-------------------
const CardBody=()=>{
    return <div className="card-body">
      <h2 className="heading">Restaurants with online food delivery in Chittoor</h2>
      <CardFlex/>
    </div>
  }
  export default CardBody;