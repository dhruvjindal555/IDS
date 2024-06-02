import React from 'react'
import LineChart from './LineChart'
import PieChart from './PieChart'
import BarChart from './BarChart'

function DashBoard() {
    return (
        <div className='flex flex-wrap flex-col items-center justify-center sm:flex-row w-screen'>
            <div className='my-4'>
                <h1 className='text-center my-2 font-medium text-2xl'>
                    Line Chart
                </h1>
                <LineChart />
            </div>
            <div className='my-4'>
                <h1 className='text-center my-2 font-medium text-2xl'>
                    Pie Chart
                </h1>
                <PieChart />
            </div>
            <div className='my-4'>
                <h1 className='text-center my-2 font-medium text-2xl'>
                    Bar Chart
                </h1>
                <BarChart />
            </div>
        </div>
    )
}

export default DashBoard