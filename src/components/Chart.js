import { Bar } from 'react-chartjs-2'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Chart = () => {
    const [chartData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: '2021',
                data: [ 67, 82, 69, 32, 52, 26, 10, 12, 69, 95, 10, 110 ],
                backgroundColor: 'rgba(60, 179, 113, 0.8)'
            },
            {
                label: '2020',
                data: [ 59, 79, 23, 32, 78, 39, 11, 100, 45, 90, 16, 95 ],
                backgroundColor: 'rgba(255, 116, 71, 0.8)'
            }
        ],
    })

    return (
        <div className="chart">
        <Bar 
            data={chartData} 
            
            options={{
                maintainAspectRatio: true,
                responsive: true,
                scales: {
                    xAxes: [{
                        scaleLabel: { 
                            labelString:"Months", 
                            display: true
                        }
                    }],
                    yAxes: [{
                        scaleLabel: { 
                            labelString:"Number Of days",
                            display: true 
                        },
                        ticks: {beginAtZero: true}
                    }]
                },
                title: {
                    display: true,
                    text: 'Average Collection Days over Time',
                    fontSize: 18
                },
                legend: {
                    display: true,
                    position: 'right'
                }
            }}
        />

        <Link to='/'>Go Back</Link>
        </div>
    )
}

export default Chart