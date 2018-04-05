import React from 'react';
import { Line } from 'react-chartjs-2';
import httpHelper from '../libs/httpHelpers';
import graphDataFormatter from './dataFormatter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinData: null,
    };
    this.fetchData = this.fetchData.bind(this);
    this.render = this.render.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const query = {
      id: 'BITSTAMP_SPOT_BTC_USD',
    };
    httpHelper.get(query, (result) => {
      this.setState({
        coinData: result[0].data,
      });
    });
  }

  render() {
    if (this.state.coinData !== null) {
      const data = graphDataFormatter(this.state.coinData);
      console.log('formatted data', data);
      return (
        <div>
          <Line data={data} />
        </div>
      );
    }
    return (
      <div>
        <div />
      </div>
    );
  }
}

export default App;

