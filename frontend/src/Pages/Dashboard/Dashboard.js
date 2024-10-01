import React from 'react';
import Menu from '../Menu/Menu';
import Chart from 'react-apexcharts';

const Dashboard = () => {
  return (
    <div>
        <Menu heading={"Dashboard"}/>
        <div className='container-fluid'>
          <h3>Deparatment wise - Total Vs Closed</h3>

          <Chart
            type='bar'
            width={1200}
            height={700}

            series={
              [
                {
                  name: "Sample testing",
                  data: [12,14,15,18,24]
                }
              ]
            }

            options={{
              title:{text:"Deparatment wise - Total Vs Closed"}
            }}
          >

          </Chart>

        </div>
    </div>
  )
}

export default Dashboard;