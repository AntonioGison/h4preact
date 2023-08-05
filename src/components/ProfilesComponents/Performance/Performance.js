import React from 'react'
import './Performance.css'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5'],
  datasets: [
    {
      label: '# of Votes',
      data: [8, 8, 8, 8, 8],
      pointBackgroundColor: ['#69C5DC', '#6CBFA4', '#674D99', '#E73657', '#FCBD0E'],
      backgroundColor: 'rgba(255, 99, 132, 0.2)', //colore al centro
      borderColor: 'white',
      color: 'white',
      borderWidth: 1,
      bodyColor: 'white',
      titleColor: 'white',
    },
  ],
};

function Performance() {
  return (
    <div className='minibox auto performance_center'>
      <h2>Performance</h2>
      <hr/>
      <Radar data={data} className='chart'/> 
    </div>
  )
}

export default Performance