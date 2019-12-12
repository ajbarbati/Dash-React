import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: '100k',
      backgroundColor: 'rgb(217, 83, 79)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 2,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default class BarExample extends React.Component {
  render() {
    return (
      <div>
        <h2>Total Users</h2>
        <HorizontalBar data={data}
        width={100}
        height={200}
        options={{ maintainAspectRatio: true }} />
      </div>
    );
  }
}




