import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import 'chartjs-plugin-annotation';

// declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent  implements  OnInit {

  @ViewChild('myCanvas')
  public canvas: ElementRef;
  public context: CanvasRenderingContext2D;
  public chartType = 'line';
  public chartData: any[];
  public chartLabels: any[];
  public chartColors: any[];
  public chartOptions: any;

  ngOnInit() {

    this.chartData = [{
      data: [3, 1, 4, 2, 5],
      label: 'Anthracnose',
      fill: false
    }];
    this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    this.chartColors = [{
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderColor: 'rgba(0, 0, 0, 1)'
    }];
    this.chartOptions = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1
          }
        }]
      },
      annotation: {
        drawTime: 'beforeDatasetsDraw',
        annotations: [{
          type: 'box',
          id: 'a-box-1',
          yScaleID: 'y-axis-0',
          yMin: 0,
          yMax: 1,
          backgroundColor: 'gray'
        }, {
          type: 'box',
          id: 'a-box-2',
          yScaleID: 'y-axis-0',
          yMin: 1,
          yMax: 2.7,
          backgroundColor: 'yellow'
        }, {
          type: 'box',
          id: 'a-box-3',
          yScaleID: 'y-axis-0',
          yMin: 2.7,
          yMax: 5,
          backgroundColor: 'gray'
        }]
      }
    };
  }

}
