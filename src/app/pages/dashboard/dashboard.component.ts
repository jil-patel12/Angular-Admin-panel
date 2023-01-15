import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from "moment";

import { ChatChartOption, PieChartOptions } from "src/app/core/models/apexchart.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public chartOptions: Partial<ChatChartOption>;

  public piechartOptions: Partial<PieChartOptions>;

  moment = moment;

  selectedRange: any = { startDate: moment().add(-1, 'months'), endDate: moment().add(-1, 'months') };
  ranges: any;
  constructor() {
    this.ranges = {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    };
  }

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "chat",
          data: [25, 12, 15, 50, 12]
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '35%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May"
        ],
        axisBorder: {
          show: true
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      grid: {
        show: false
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
      }
    };

    this.piechartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 400,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  datesUpdated() {
  }

}
