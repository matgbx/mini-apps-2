import React from 'react';
import HomePage from './HomePage';
import AccountCreate from './AccountCreate';
import ShippingDetails from './ShippingDetails';
import PaymentView from './PaymentView';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: HomePage,
      purchaseData: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(page, data) {
    this.setState({
      form: page,
      purchaseData: data,
    });
  }

  render() {
    let CurrentView = this.state.form;
    if (this.state.form === '') {
      CurrentView = HomePage;
    }
    return (
      <CurrentView handleClick={this.handleClick} data={this.state.purchaseData} />
    );
  }
}

export default App;
