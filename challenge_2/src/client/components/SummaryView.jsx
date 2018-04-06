import React from 'react';

class SummaryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit() {
    this.props.handleClick('', this.props.data);
    // make ajax call and post data obj
    console.log(this.props.data);
  }

  render() {
    const data = this.props.data;
    const cardNumEnd = data.paymentDetails.cardNumber.toString().slice(-4);
    return (
      <div>
        <div className="summaryBox">
          <div className="accountCreds">
            <div className="sectionTitle">Account Details</div>
            <div>
              <div className="credType">Username</div><div className="credValue">{data.username}</div>
            </div>
            <div>
              <div className="credType">Name</div><div className="credValue">{`${data.first} ${data.last}`}</div>
            </div>
            <div>
              <div className="credType">Email</div><div className="credValue">{data.email}</div>
            </div>
            <div className="sectionTitle">Shipping Address</div>
            <div>
              <div className="credType">Street Address</div><div className="credValue">{`${data.address.lineOne}, ${data.address.lineTwo}`}</div>
            </div>
            <div>
              <div className="credType">City</div><div className="credValue">{data.address.city}</div>
            </div>
            <div>
              <div className="credType">State</div><div className="credValue">{data.address.state}</div>
            </div>
            <div>
              <div className="credType">Zip code</div><div className="credValue">{data.address.zip}</div>
            </div>
            <div className="sectionTitle">Payment Method</div>
            <div>
              <div className="credType">Cardholder name</div><div className="credValue">{data.paymentDetails.name}</div>
            </div>
            <div>
              <div className="credType">Card ending in</div><div className="credValue">{`**********-${cardNumEnd}`}</div>
            </div>
            <div>
              <div className="credType">Expiry date</div><div className="credValue">{data.paymentDetails.expiryDate}</div>
            </div>

          </div>
        </div>
        <div className="nextBtn" onClick={() => this.handleFormSubmit()}>Confirm</div>
      </div>
    );
  }
}

module.exports = SummaryView;
