import React from "react";
const BestCard=()=>{
    return <div>
        <div className="b-c">
             <img className="b-i" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/731031544495581f1d6884624aa3ecf5"></img>
        </div>
    </div>
}

const BestFlex=()=>{
    return <div className="b-flex">
        <BestCard/>
        <BestCard/>
        <BestCard/>
        <BestCard/>
        <BestCard/>

    </div>
}
export default BestFlex;