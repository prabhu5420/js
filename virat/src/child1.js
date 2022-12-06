import React from "react";

class Child1 extends React.Component
{
    render()
    {
        return(
            <div>
                <button onClick={()=>this.props.update("virat","18")}>changeName</button>
            </div>
        )
    }
}
export default Child1;