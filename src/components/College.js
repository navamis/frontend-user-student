import React, { Component } from 'react'
import { connect } from 'react-redux';




class College extends Component {
 
 

    render() {
      console.log(this.props)
        return (



          
              <div class="card">
        <img
          src="img_avata.png"
          className="card-img-top"
          alt="..."
          style={{ height: "150px", objectFit: "contain" }}
        />
            <div className="card-body">
            <span className="badge rounded-pill bg-dark">college Id :{this.props.collegeRegId}</span><br/>
             <h5 className="card-title">College Name :{this.props.collegeName}</h5>
             <h5>Address : </h5>
             <h5 className="card-title">      Id :{this.props.addressId}</h5>
             <h5 className="card-title">      District :{this.props.district}</h5>
             <h5 className="card-title">      States  :{this.props.states}</h5>
             <h5 className="card-title">      City  :{this.props.city}</h5>
             <h5 className="card-title">      Country :{this.props.country}</h5>
             <h5 className="card-title">      Zipcode :{this.props.zipcode}</h5>
             <h5 className="card-title">      Landmark :{this.props.landmark}</h5>
            
             
              
             </div>
           </div>
       )
    }
 }

const mapStateToProps = (state) =>{
  return{
    colleges : state.colleges
  }
}


export default connect(mapStateToProps)(College)