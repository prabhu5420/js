import React from "react";
 
const Content = ()=>{
    return(
        <div className="per-details">
            <h3>Personal details</h3>
            <form className="form">
             <label>Enter your name:
              <input type="text" />
             </label><br></br><br></br>
             <label> phone number :
                <input type="number" />
             </label>
            </form><hr></hr>
            <div className="button">
            <button className="btn">BACK</button>
            <button className="btn">SUBMIT</button>
            </div>
            
        </div>
    )
}

export default Content;