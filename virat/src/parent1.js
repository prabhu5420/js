import React from "react";
import Child1 from "./child1";

class Parent1 extends React.Component
{
    constructor()
    {
        super()
        this.state={
            name:"rohit",
            jersyNo:45
        }
    }
    changename=(data,data1)=>{
        this.setState({
            name:data,
            jersyNo:data1
        })
    }
    render(){
        return(
            <div>
                <h2>player :{this.state.name}</h2>
                <h1>jersyNo:{this.state.jersyNo}</h1>
                <Child1 update={this.changename}/>

            </div>
        )
    }
}
export default Parent1;