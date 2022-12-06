import React from "react";
import Two from "./Two";

class One extends React.Component
{
    constructor()
    {
        super()
        this.state={
            favoritecolor:"red",
            name:"ashok"
        }
        console.log("one constructor");
    }
    shouldComponentUpdate() 
    {
        return true;
    }

      changecolor=()=>
    {
        this.setState({favoritecolor:"black"})
    }
    
    // static getDerivedStateFromProps(props,state)
    // {
    //     console.log("GDFP");

    //     return{favoritecolor:props.favcolor},{name:props.nam}
    // }

    render()
    {
        console.log("one render");

        return(
            <div>
                <h1>My favorite color:{this.state.favoritecolor}</h1>
                <button onClick={this.changecolor}>change color</button>
                {this.state.name}
                <Two/>
            </div>
        )
    }
}
export default One;