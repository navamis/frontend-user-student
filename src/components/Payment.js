import React, { Component } from "react";
import { connect } from "react-redux";


class Payment extends Component {
 

  render() {
    return (
      <div className="card">
        <img
          src="stock-photography.jpg"
          
          className="card-img-top"
          alt="..."
          style={{ height: "250px", objectFit: "contain" }}
        />
        <div className="card-body">
          <span className="badge rounded-pill bg-primary">
            Payment Id :{this.props.paymentId}
          </span>
          <h5 className="card-text">Email:{this.props.emailId}</h5>
          <p className="card-text">
            ApplicantFullName :{this.props.applicantFullName}
          </p>
          <p className="card-text">
            Payment Amount :{this.props.paymentAmount}
          </p>
          <p className="card-text">
            Payment Description :{this.props.paymentDescription}
          </p>
          <p className="card-text">
            Payment Status :{this.props.paymentStatus}
          </p>
          <p className="card-text">Payment Date :{this.props.paymentDate}</p>
         

          
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    payments: state.payments,
  };
};



export default connect(mapStateToProps)(Payment);