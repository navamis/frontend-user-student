import React, { Component } from 'react'
import { connect } from 'react-redux';



class Program extends Component {

    

    render(){
        return (
          <div className="card">
          <img src="program icon.png" width = "50%" className="card-img-top" alt="..."/>
          <div className="card-body">
          <span className="badge rounded-pill bg-dark">Program Id :{this.props.programId}</span>
            <h5 className="card-title">Program Name:</h5>
            <h5 className="card-title">{this.props.programName}</h5>
            <p className="card-text">Eligibility      :{this.props.eligibility}</p>
            <p className="card-text">Duration      :{this.props.duration}</p>
            <p className="card-text">Degree Offered      :{this.props.degreeOffered}</p>

           
          </div>
        </div>
      )
}
}


const mapStateToProps = (state) =>{
    return{
     programs : state.programs
    }
  }
  
  
  export default connect(mapStateToProps)(Program)