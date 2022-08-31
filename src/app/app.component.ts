import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  updateFlag = false;
  dataSet: any = [
    {
      data: [
        ['1', 52.2],
        ['2', 18.6],
        ['3', 18],
        ['4', 5.1],
        ['5', 5.4],
      ],
      id: 0,
      name: 'Customer 1',
    },
    {
      data: [
        ['1', 47.2],
        ['2', 23.6],
        ['3', 5.4],
        ['4', 5.1],
        ['5', 18],
      ],
      id: 1,
      name: 'Customer 2',
    },
    {
      data: [
        ['1', 27.2],
        ['2', 20.6],
        ['3', 35.4],
        ['4', 8.1],
        ['5', 18],
      ],
      id: 2,
      name: 'Customer 3',
    },
  ];

  chartBaseline: any = [
    ['Stage 1 - baseline', 27.2],
    ['Stage 2 - baseline', 20.6],
    ['Stage 3 - baseline', 35.4],
    ['Stage 4 - baseline', 8.1],
    ['Stage 5 - baseline', 18],
  ];

  chartTypeId = 0;
  donutChart: any;

  donut: Highcharts.Options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
    },
    title: {
      text: '<strong>Customer onboarding<br>Stages</strong>',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        animation: false,
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          distance: -20,
          style: {
            fontWeight: 'bold',
            color: 'white',
          },
        },
        startAngle: 0,
        endAngle: -180,
        center: ['50%', '50%'],
        size: '90%',
        showInLegend: true,
      },
    },
    series: [
      {
        opacity: 0.3,
        type: 'pie',
        innerSize: '0%',
        size: '100%',
        name: 'line 2',
        dataLabels: {
          enabled: true,
          distance: 30,
          style: {
            fontWeight: 'bold',
            color: 'white',
          },
        },
        data: this.chartBaseline,
      },
      {
        name: 'Browsers',
        data: this.dataSet[this.chartTypeId].data,
        type: 'pie',
        innerSize: '60%',
        size: '85%',
      },
    ],
  };

  setChartTypeId(id) {
    console.log(this.dataSet[id].data);
    this.updateFlag = true;
    this.donutChart.options.series[1].data = this.dataSet[id].data;

    this.donutChart = new Chart(this.donut);
    //this.donutChart.redraw();
  }

  ngOnInit() {
    this.donutChart = new Chart(this.donut);
  }
}
