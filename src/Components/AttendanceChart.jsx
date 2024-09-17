import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Attendance',
          data: [23, 16, 12, 43, 64, 21, 32, 56,],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + " " + 'days';
          },
          offsetY: -20,
          style: {
            fontSize: '8px',
            colors: ['#0f172b'],
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + '%';
            },
          },
        },
        title: {
          floating: false,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#0f172b',
          },
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart" >
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    );
  }
}

const AttendanceChart = () => {
  return (
    <div>
      <ApexChart />
    </div>
  );
};

export default AttendanceChart;
