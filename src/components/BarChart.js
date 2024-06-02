import React, { useState } from 'react'
import { eventsPerSrcIp, eventsPerDestIp, alertsPerAction } from '../DUMMY_DATA'
import { Bar } from 'react-chartjs-2';
import DropdownBtn from './DropdownBtn';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
  Legend,
  LineElement,
  BarElement
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  BarElement,
  Title,
  Legend,
  LineElement
)

function BarChart() {
  const [param, setParam] = useState("Events per Source IP")
  const barData = {
    labels: Object.keys(eventsPerSrcIp),
    datasets: [{
      label: 'Events per Source IP',
      data: Object.values(eventsPerSrcIp),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };
  return (
    <div className='flex items-center justify-evenly w-screen'>
      <div style={{ width: "80vw", height: "90vh" }}>
        <Bar data={barData} options={{
          responsive: true, plugins: { legend: { position: 'top' } }, scales: {
            x: {
              title: {
                display: true,
                text: ' Source IP',
                color: '#000000',
                font: {

                  size: 20,

                  lineHeight: 1.2,
                },
                padding: { top: 20, left: 0, right: 0, bottom: 0 },
              },
            },
            y: {
              title: {
                display: true,
                text: 'Values',
                color: '#000000',
                font: {

                  size: 20,

                  lineHeight: 1.2,
                },
                padding: { top: 30, left: 0, right: 0, bottom: 0 },
              },
              beginAtZero: true,
            },
          },
        }} />
      </div>
      {/* <div>
        <DropdownBtn param={param} setParam={setParam} />
      </div> */}
    </div>
  )
}

export default BarChart