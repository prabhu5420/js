import React from "react";

class Child extends React.Component
{
    constructor()
    {
        super()
        this.state={
            Name:"Rohit"
        }
    }
    update=()=>{
        this.setState({
            Name:this.props.Name
        })
    }
    render(){
        return(
            <div>
                <h1>player name  :{this.state.Name}</h1>
                <button onClick={this.update}>changeName</button>
                
            </div>
        )
    }
}
export default Child;