import React, { Component } from 'react'
import { connect } from 'react-redux';



class ProgramScheduled extends Component {

    


    render(){
        return (
          <div className="card">
          <img src="programScheduled.png" width = "50%" className="card-img-top" alt="..."/>
          <div className="card-body">
          <span className="badge rounded-pill bg-dark">ProgramSchedule Id :{this.props.scheduleId}</span>
             <h5 className="card-title">Branch Name        :{this.props.branchName}</h5>
            <p className="card-text">Course Name     :{this.props.courseName}</p>
            <p className="card-text">Eligibility     :{this.props.eligibility}</p>
            <p className="card-text">Program Name     :{this.props.programName}</p> 
            <p className="card-text">StartDate:{this.props.startDate}</p>
            <p className="card-text">EndDate:{this.props.endDate}</p>

           
          </div>
        </div>
      )
}
}


const mapStateToProps = (state) =>{
    return{
     programSchedules : state.programSchedules
    }
  }
  
  
  
  export default connect(mapStateToProps)(ProgramScheduled)