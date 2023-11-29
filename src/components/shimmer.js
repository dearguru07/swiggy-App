import React from "react";

const ShimmerCard=()=>{
    return <div>
      <div className="s-card" >
      <div className="s-img"></div>
    </div>
    <div className="move">
      <h3 className="s-name"></h3>
      <p className="s-type"></p>
      <p className="s-place"></p>
    </div>
    </div>
}

const Shimmer=()=>{
    return <div className="card-flex">
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>

    </div>
}
export default Shimmer;