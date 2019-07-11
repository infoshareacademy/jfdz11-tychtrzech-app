import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2'

class ChartPie extends Component {
    constructor(propsPie) {
        super(propsPie);
        this.state = {
            chartDataLine: {
                labels: ['Math', 'Biology', 'Physics', 'Chemistry'],
                datasets: [
                    {
                        label: 'Question Solved',
                        data: [
                            26,
                            58,
                            33,
                            12,
                        ],
                        backgroundColor: [
                            'rgb(0, 123, 255)',
                            '#dc3545',
                            '#ffc107',
                            '#28a745',
                        ]

                    }
                ]
            }

        }
    }


    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom'
    }


    render() {
        return (
            <div className="chartPie">
                <Pie
                    data={this.state.chartDataLine}
                    width={400}
                    height={400}
                    labels={50}


                    options={{
                        maintainAspectRatio: false,

                        title: {
                            display: this.props.displayTitle,
                            text: 'Questions Solved:',
                            fontSize: 25,

                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition,

                        },

                    }}
                />
            </div>

        )


    }

}


export default ChartPie
