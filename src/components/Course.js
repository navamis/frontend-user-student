import React, { Component } from 'react'
import { connect } from 'react-redux';



class Course extends Component {

   

    render(){
        return (
          <div className="card">
          <img src="download.png" width = "50%" className="card-img-top" alt="..."/>
          <div className="card-body">
          <span className="badge rounded-pill bg-dark">Course Id :{this.props.courseId}</span>
          <h5 className="card-title">Course Name:</h5>
            <h5 className="card-title">{this.props.courseName}</h5>
            <p className="card-text">Eligibility      :{this.props.eligibility}</p>
          

           
          </div>
        </div>
      )
}
}


const mapStateToProps = (state) =>{
    return{
     courses : state.courses
    }
  }
  
  
  
  export default connect(mapStateToProps)(Course)