import React from "react";

class Two extends React.Component
{
    constructor()
    {
        super()
        this.state={
            favoritecolor:"blue"
        }
        console.log("two constructor");
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({favoritecolor:"orange"})
        }, 1000);
        console.log("CDM-two");
    }
    render()
    {
        console.log("render-two");
        return(
            <div>
                <h1>favorite color: {this.state.favoritecolor}</h1>
            </div>
        )
    }
}
export default Two;