import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2'

class ChartLoginBar extends Component {
    constructor(propsBar) {
        super(propsBar);
        this.state = {
            chartDataLine: {
                labels: ['Użytkownicy zalogowani w ostatnim tygodniu'],
                datasets: [
                    {
                        label: 'Użytkownicy',
                        data: [
                            1,
                            7
 
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
        legendPosition: 'right'
    };

    render() {
        return (
            <div className="chartBar">
                <Bar

                    data={this.state.chartDataLine}
                    width={400}
                    height={400}
                    options={{
                        maintainAspectRatio: false,

                        title: {
                            display: this.props.displayTitle,
                            text: 'Dane statystyczne',
                            fontSize: 25
                        },
                    }}
                />
            </div>
        )
    }
}


export default ChartLoginBar


