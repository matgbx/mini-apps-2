import React from 'react';
import SummaryView from './SummaryView';
import httpHelpers from '../libs/httpHelpers';

class PaymentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    };
    this.handleFieldInputs = this.handleFieldInputs.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit() {
    // const paymentDetails = {
    //   name: this.state.name,
    //   cardNumber: this.state.cardNumber,
    //   expiryDate: this.state.expiryDate,
    //   cvv: this.state.cvv,
    // };

    // ***** for testing **** //
    const paymentDetails = {
      name: 'Mat Bagnall',
      cardNumber: 1234567890,
      expiryDate: '11/20',
      cvv: 901,
    };
    const purchaseData = this.props.data;
    purchaseData.paymentDetails = paymentDetails;

    // this function tells App.jsx to render the next form
    // it also passes the user information along
    this.props.handleClick(SummaryView, purchaseData);

    // post to server/database
    httpHelpers.post(paymentDetails, 'payment');
  }

  handleFieldInputs(field, val) {
    this.setState({
      [field]: val,
    });
  }

  render() {
    return (
      <div className="paymentForm">
        <div className="paymentTitle">Payment Method</div>
        <div className="inputField">
          <span className="inputTitle">Cardholder Name:</span>
          <input type="text" onChange={evt => this.handleFieldInputs('name', evt.target.value)} />
        </div>
        <div className="inputField">
          <span className="inputTitle">Credit Card Number:</span>
          <input type="number" onChange={evt => this.handleFieldInputs('cardNumber', evt.target.value)} />
        </div>
        <div className="inputField">
          <span className="inputTitle">Expiry Date:</span>
          <input type="number" onChange={evt => this.handleFieldInputs('expiryDate', evt.target.value)} />
        </div>
        <div className="inputField">
          <span className="inputTitle">CVV Number:</span>
          <input type="number" onChange={evt => this.handleFieldInputs('cvv', evt.target.value)} />
        </div>
        <div className="nextBtn" onClick={() => this.handleFormSubmit()}>Next</div>
      </div>
    );
  }
}

module.exports = PaymentView;
