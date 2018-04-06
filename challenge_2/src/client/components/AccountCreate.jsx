import React from 'react';
import ShippingDetails from './ShippingDetails';
import httpHelpers from '../libs/httpHelpers';

class AccountCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      first: '',
      last: '',
      email: '',
      password: '',
    };
    this.handleFieldInputs = this.handleFieldInputs.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit() {
    // const credentials = {
    //   username: this.state.username,
    //   first: this.state.first,
    //   last: this.state.last,
    //   email: this.state.email,
    //   password: this.state.password,
    // };

    // **** below obj for testing **** //
    const credentials = {
      username: 'matgbx',
      first: 'Mat',
      last: 'Bagnall',
      email: 'matbagnall@gmail.com',
      password: 'password',
    };
    // this function tells App.jsx to render the next form
    // it also passes the user information along
    this.props.handleClick(ShippingDetails, credentials);

    // post to server/database
    httpHelpers.post(credentials, 'new-user');
  }

  handleFieldInputs(field, val) {
    this.setState({
      [field]: val,
    });
  }

  render() {
    return (
      <div className="accountForm">
        <div className="inputField">
          <div className="inputTitle">Username</div>
          <input type="text" onChange={evt => this.handleFieldInputs('username', evt.target.value)} />

        </div>
        <div className="inputField">
          <div className="inputTitle">Name</div>
          <input type="text" placeholder="first name" onChange={evt => this.handleFieldInputs('first', evt.target.value)} />
          <input type="text" placeholder="last name" onChange={evt => this.handleFieldInputs('last', evt.target.value)} />
        </div>
        <div className="inputField">
          <div className="inputTitle">Email</div>
          <input type="text" onChange={evt => this.handleFieldInputs('email', evt.target.value)} />
        </div>
        <div className="inputField">
          <div className="inputTitle">Password</div>
          <input type="text" onChange={evt => this.handleFieldInputs('password', evt.target.value)} />
        </div>
        <div className="nextBtn" onClick={() => this.handleFormSubmit()}>Next</div>
      </div>
    );
  }
}

export default AccountCreate;
