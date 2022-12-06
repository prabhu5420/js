import React from 'react';
import Com2 from './userB';

class Com1 extends React.Component
{
    constructor(){
        super()
        this.state={
            name:"hello friends",
            count:0,
            emp:[{id:1,name:"prabhu",salary:40000},
            {id:2,name:"bala",salary:50000},
            {id:3,name:"ashok",salary:60000}]
        }
    }
    updateMsg = (data) => {
        this.setState({
          name:data
        })
      }
      increment = () => {
        this.setState({count:this.state.count+2})
      }
      decrement = () => {
        this.setState({count:this.state.count-1})
       
      }
      edit = () => {
        this.setState({
            emp:[{id:1,name:"",salary:70000}]
        })
      }
    render()
    {
        return(
            <div>
                <h1>ComA</h1>
                <br/>
                <h1>{this.state.name}</h1>
                <h1>Employe Details</h1>

                <table>
                    <thead >
                        <tr className='th'><th>Employe Id</th><th>Employe Name</th><th>salary</th></tr>
                    </thead>
                    <tbody className='tb'>
                        {
                         this.state.emp.map(e=><tr key={e.id}><td>{e.id}</td><td>{e.name}</td><td className='sal'>{e.salary}</td></tr>)
                        }
                    </tbody>
                </table>

                <button onClick={this.edit}>Edit</button>
               <input onChange={e=>this.setState({name:e.target.value})}/>
               <button onClick={()=>this.props.update1(this.state.name)}>change name</button>
                <br/>
                <Com2  msg={this.state.name} update1={this.updateMsg}/>
                <button onClick={this.increment}>+</button>
                {this.state.count}
                <button onClick={this.decrement}>-</button>
                
            </div>
        )
    }
}
export default Com1