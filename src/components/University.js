import React, { Component } from 'react'
import { connect } from 'react-redux';



class University extends Component {

   

    render(){
        return (
          <div className="card">
          <img src="sangga.jpg" width = "50%" className="card-img-top" alt="..."/>
          <div className="card-body">
          <span className="badge rounded-pill bg-dark">University Id :{this.props.universityId}</span>
           <p className="card-text">Name                :{this.props.name}</p>
           

            
          </div>
        </div>
      )
}
}


const mapStateToProps = (state) =>{
    return{
     universitys : state.universitys
    }
  }
  
  
  
  export default connect(mapStateToProps)(University)