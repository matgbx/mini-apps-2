import React from 'react';
import { render } from 'react-dom';
import App from'./components/App';

const data = {
  id: 'BITSTAMP_SPOT_BTC_USD',
  range: '2018-01-01-2018-04-05',
  data: [
    {
      time_period_start: '2018-01-01T00:00:00.0000000Z',
      time_period_end: '2018-01-02T00:00:00.0000000Z',
      time_open: '2018-01-01T00:00:03.0000000Z',
      time_close: '2018-01-01T23:59:54.0000000Z',
      price_open: 13880,
      price_high: 13941.75,
      price_low: 12801.38,
      price_close: 13443.41,
      volume_traded: 7688.475017236,
      trades_count: 35486,
    },
  ],
};

render(<App />, document.getElementById('app'));

