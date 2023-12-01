import React from "react";
import { useState,useEffect } from "react";
import { MenuUrl } from "../../utils/mockData";
import { Params,useParams } from "react-router-dom";

const MenuCard=(props)=>{
    return <div className="parent">
    <div><h1 className="g-box"><span className="g-circle"></span></h1>
     <h4 className="item-name">{props.data.card.info.name}</h4>
     <h4 className="cost">${props.data.card.info.price/100}</h4>
     <p>{props.data.card.info.description}</p>
     </div>
     <div className="relative">
    <img className="item-img" src={MenuUrl+props.data.card.info.imageId}></img>
<div className="absolute">
   <button className="add-btn">Add</button>
</div>
   </div>
    </div>
}


const Menu = ()=>{
  const url="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.217176&lng=79.1003289&restaurantId="
  const {id}=useParams()
  const EndUrl="&catalog_qa=undefined&submitAction=ENTER"
    const [menuList,setmenuList]=useState([])
    
  async function menuApi(){

    const data= await fetch(url+id+EndUrl)
    const originalData=await data.json()
    console.log(originalData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
    setmenuList(originalData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
    console.log(menuList)
  }
     useEffect(()=>{
     menuApi()
     },[])

    return <div  className="pages">
    <h3>Recomended (7) </h3>
  {  menuList.map((x)=>{
      return <MenuCard data={x}/>
    })
}

    </div>
}
export default Menu;