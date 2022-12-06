import React from "react";
import axios from "axios";


class Employee extends React.Component
{
    constructor()
    {
        super()
        this.state={
            name:"",
            salary:0,
            id:0,
            Emp:[]
        }
    }
    viewEmp = () =>{
        axios.get('http://localhost:3000/Emp').then(res=>this.setState({Emp:res.data}))
    }
    addemp = () => {
        axios.post('http://localhost:3000/Emp',
        {"name":this.state.name,"salary":this.state.salary})
    }
    componentDidMount(){
        this.viewEmp()
      }

    setData=(data)=>{
       this.setState({name:data.name})
       this.setState({salary:data.salary})
       this.setState({id:data.id})
    }

    update = () =>{
        axios.put(`http://localhost:3000/Emp/${this.state.id}`,
        {"name":this.state.name,"salary":this.state.salary}).then(()=>this.viewEmp())
    }
  
   Empdelete = (id) => {
     axios.delete(`http://localhost:3000/Emp/${id}`).then(()=>this.viewEmp())
   }
    render()
    {
        return(
            <div>
                <h1>Employee Details</h1>
                <input placeholder="Enter Name" onChange={e=>this.setState({name:e.target.value})} value={this.state.name}/>
                <input placeholder="enter salary" onChange={e=>this.setState({salary:e.target.value})} value={this.state.salary}/>
                <button onClick={this.viewEmp}>viewEmp</button>
                <button onClick={this.addemp}>submit</button>

                <table border='1px'>
                 <thead>
                    <tr><th>Employee Name</th><th>Employee Salary</th><th>Update</th></tr>
                 </thead>
                 <tbody>
                    {
                        this.state.Emp.map(u=>
                       <tr id={u.id}><td>{u.name}</td><td>{u.salary}</td><td>
                        <button onClick={()=>this.setData(u)}>edit</button>
                         <button onClick={()=>this.Empdelete(u.id)}>delete</button></td></tr> )
                    }
                 </tbody>
                </table>
            </div>
        )
    }
}export default Employee
