import React from 'react';
import PaymentView from './PaymentView';
import httpHelpers from '../libs/httpHelpers';

class ShippingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lineOne: '',
      lineTwo: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
    };
    this.handleFieldInputs = this.handleFieldInputs.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit() {
    // const addressDetails = {
    //   lineOne: this.state.lineOne,
    //   lineTwo: this.state.lineTwo,
    //   city: this.state.city,
    //   state: this.state.state,
    //   zip: this.state.zip,
    //   phone: this.state.phone,
    // };

    // ***** for testing ***** //

    const addressDetails = {
      lineOne: '202 Doggo lane',
      lineTwo: 'Apt. 4',
      city: 'San Francisco',
      state: 'CA',
      zip: 94117,
      phone: '(415)310-8274',
    };
    const purchaseData = this.props.data;
    purchaseData.address = addressDetails;

    // this function tells App.jsx to render the next form
    // it also passes the user information along
    this.props.handleClick(PaymentView, purchaseData);

    // post to server/database
    httpHelpers.post(addressDetails, 'address');
  }

  handleFieldInputs(field, val) {
    this.setState({
      [field]: val,
    });
  }

  render() {
    return (
      <div className="shippingForm">
        <div className="inputField">
          <div className="addressTitle">Ship to:</div>
          <div className="inputTitle">line 1</div>
          <input type="text" onChange={evt => this.handleFieldInputs('lineOne', evt.target.value)} />
        </div>
        <div className="inputField">
          <div className="inputTitle">line 2</div>
          <input type="text" onChange={evt => this.handleFieldInputs('lineTwo', evt.target.value)} />
        </div>
        <div className="inputField">
          <div className="inputTitle">City</div>
          <input type="text" onChange={evt => this.handleFieldInputs('city', evt.target.value)} />
        </div>
        <div className="inputField">
          <div className="inputTitle">State</div>
          <input type="text" onChange={evt => this.handleFieldInputs('state', evt.target.value)} />
        </div>
        <div className="inputField">
          <div className="inputTitle">Zip Code</div>
          <input type="text" onChange={evt => this.handleFieldInputs('zip', evt.target.value)} />
        </div>
        <div className="inputField">
          <div className="inputTitle">Phone Number</div>
          <input type="text" onChange={evt => this.handleFieldInputs('phone', evt.target.value)} />
        </div>
        <div className="nextBtn" onClick={() => this.handleFormSubmit()}>Next</div>
      </div>
    );
  }
};

module.exports = ShippingDetails;
