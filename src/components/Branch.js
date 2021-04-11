import React, { Component } from 'react'
import { connect } from 'react-redux';


class Branch extends Component {

  

   
  
  
    render() {
      
        return (
            <div className="card">
            <img src="branchicon3.png" width="50%" className="card-img-top" alt="..."/>
            <div className="card-body">
          <span className="badge rounded-pill bg-dark">Branch Id:{this.props.branchId}</span>
            <h5 className="card-title">Branch:</h5>
            <h5 className="card-title">{this.props.branchName}</h5>
            <p className="card-text">BranchDescription:{this.props.branchDescription}</p>

          </div>
        </div>
        )
    }
}

const mapStateToProps = (state) =>{
  return{
    branches : state.branches
  }
}


export default connect(mapStateToProps)(Branch)