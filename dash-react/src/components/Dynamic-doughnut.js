import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
  labels: [
    'Windows',
    'Mac',
    'Linux'
  ],
  datasets: [{
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
    backgroundColor: [
    '#0275d8',
    '#5cb85c',
    '#f0ad4e'
    ],
    hoverBackgroundColor: [
    '#292b2c',
    '#292b2c',
    '#292b2c'
    ]
  }]
});

export default class DynamicDoughnutExample extends React.Component {
    	getInitialState() {
		return getState();
	}

	componentWillMount() {
		setInterval(() => {
			this.setState(getState());
		}, 5000);
	}

  render() {
    return (
      <div>
        <h4>Operating System Users</h4>
        <Doughnut data={this.state} />
      </div>
    );
  }
}

