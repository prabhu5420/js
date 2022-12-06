import React from "react";
import { ReactDOM } from "react";
import Child from "./child";

class Parent extends React.Component
{
    constructor()
    {
       super()
       this.state={
            Name:"Rohit",
            jersyNo:45
       }
    }
    // changeName=()=>{
    //     this.setState({
    //         Name:"virat",
    //         jersyNo:18
    // /     })
    
    render(){
        return(
            <div>
                {/* <h1>player name :{this.state.Name}</h1> */}
                <Child Name="virat"/>
            </div>
        )
    }
}
export default Parent;