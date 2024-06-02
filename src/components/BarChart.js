import React,{useState} from 'react'
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
        <Bar data={barData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
      </div>
      {/* <div>
        <DropdownBtn param={param} setParam={setParam} />
      </div> */}
    </div>
  )
}

export default BarChart