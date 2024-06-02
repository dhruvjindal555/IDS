import React,{useState} from 'react'
import { eventsPerSrcIp, eventsPerDestIp, alertsPerAction } from '../DUMMY_DATA'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  Title,
  Legend,
  LineElement
} from 'chart.js';
import DropdownBtn from './DropdownBtn';


ChartJS.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  Title,
  Legend,
  LineElement
)

function LineChart() {
  const [param, setParam] = useState("Events per Source IP")
  const lineData = {
    labels: Object.keys(eventsPerDestIp),
    datasets: [{
      label: 'Events per Destination IP',
      data: Object.values(eventsPerDestIp),
      fill: false,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };
  return (
    <div className='w-screen   '>
      <div className='m-10 flex justify-center items-center ' style={{ width: "85vw", height: "75vh" }}  > <Line data={lineData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} /></div>
      {/* <div>
        <DropdownBtn param={param} setParam={setParam}/>
      </div> */}
    </div>
  )
}

export default LineChart