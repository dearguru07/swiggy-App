import React from "react";
import { useState,useEffect } from "react";

const MenuCard=()=>{
    return <div className="parent">
    <div><h1 className="g-box"><span className="g-circle"></span></h1>
     <h4 className="item-name">veg biryani</h4>
     <h4 className="cost">$249/-</h4>
     <p>ldjiflnfjfoufen fofbfufnojpfq dkjfjbfoifofufbdddddddddoliibndiiiiiiiiiiiiidb</p>
     </div>
     <div className="relative">
    <img className="item-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/612ea658231b115828737161c419243c"></img>
<div className="absolute">
   <button className="add-btn">Add</button>
</div>
   </div>
    </div>
}


const Menu = ()=>{
    const [menuList,setmenuList]=useState([])
    
  async function menuApi(){
    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.217176&lng=79.1003289&restaurantId=363193&catalog_qa=undefined&submitAction=ENTER")
    const originalData=await data.json()
    console.log(originalData.data.cards[2].groupedCards.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
    // setresto(originalData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
   }
     useEffect(()=>{
     menuApi()
     },[])

    return <div  className="pages">
    <h3>Recomended (7) </h3>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>

    </div>
}
export default Menu;