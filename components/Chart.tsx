import React, { Component } from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';
import { getCounts, getAnnotations } from '../helpers.tsx';
interface IProps {}

interface IState {
  counts: Array;
  annotations: Array;
}

export class Chart extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.options = {
      animationEnabled: true,
      exportEnabled: true,
      zoomEnabled: true,
      colorSet: 'colorSet2',
      title: {
        text: 'Expression over Range With Annotations',
        fontFamily: "'Overpass', sans-serif"
      },
      axisY: {
        title: 'Count'
      },
      axisX: {
        title: 'Range',
        interval: 1000,
        stripLines: getAnnotations(props.annotations)
      },
      toolbar: {
        itemBackgroundColor: '#fff',
        itemBackgroundColorOnHover: 'rgb(48 91 124)',
        buttonBorderColor: '#eccaa0',
        buttonBorderThickness: 1,
        fontColor: '#000',
        fontColorOnHover: '#fff'
      },
      toolTip: {
        shared: true,
        content: 'Range: {x}, Count: {y}'
      },
      data: [
        {
          type: 'line',
          name: 'Count',
          showInLegend: true,
          dataPoints: getCounts(props.counts)
        }
      ]
    };
  }

  render() {
    return <CanvasJSChart options={this.options} />;
  }
}

export default Chart;
