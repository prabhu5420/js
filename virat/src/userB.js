import React from "react";

class Com2 extends React.Component
{
    constructor()
    {
        super()
        this.state={
            name:''
        }
    }
    
    render(){
        return(
            <div className="comB">
               <h1>ComB</h1>
               
               <h1>{this.props.msg}</h1><br/>
               <input onChange={e=>this.setState({name:e.target.value})}/>
               <button onClick={()=>this.props.update1(this.state.name)}>update name</button>
            </div>
        )
    }
}
export default Com2;