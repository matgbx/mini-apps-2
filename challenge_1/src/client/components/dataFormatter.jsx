import moment from 'moment';

const formatDates = (dataList) => {
  const dates = dataList.map((item) => {
    const newDate = moment(item.time_period_start).format('YYYY-MM-DD');
    return newDate;
  });
  return dates;
};

const getClosePrices = (dataList) => {
  const prices = dataList.map(item => item.price_close);
  return prices;
};

const dataFormatter = (dataList) => {
  const dates = formatDates(dataList);
  const prices = getClosePrices(dataList);
  const graphDataObj = {
    labels: dates,
    datasets: [{
      label: 'Daily Close Price',
      data: prices,
      backgroundColor: [
        // 'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    }],
  };
  return graphDataObj;
};

export default dataFormatter;
