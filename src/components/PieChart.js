import React, { useState } from 'react'
import { eventsPerSrcIp, eventsPerDestIp, alertsPerAction } from '../DUMMY_DATA'
import { Doughnut } from 'react-chartjs-2';


import {
  Chart as ChartJS,
  Tooltip,
  Title,
  Legend,
  ArcElement
} from 'chart.js';
import DropdownBtn from './DropdownBtn';


ChartJS.register(
  Tooltip,
  ArcElement,
  Title,
  Legend,
)

function PieChart() {
  const arr = ["eventsPerSrcIp", "eventsPerDestIp", "alertsPerAction"]
  const [param, setParam] = useState("Events per Source IP")
  const pieData = {
    labels: Object.keys(alertsPerAction),
    datasets: [{
      data: Object.values(alertsPerAction),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    }]
  };
  return (
    <>
      <div className='flex '>
        <div style={{ width: "100vw", height: "80vh" }} className='flex items-center justify-center '>
          <Doughnut data={pieData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        </div>
        {/* <div>
          <DropdownBtn param={param} setParam={setParam} options={arr} />
        </div> */}
      </div>


    </>

  )
}

export default PieChart