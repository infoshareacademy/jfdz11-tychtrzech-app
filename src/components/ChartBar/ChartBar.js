import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2'
import { tsThisType } from '@babel/types';

class ChartBar extends Component{
    constructor(propsBar){
        super(propsBar);
        this.state = {
            chartDataLine:{
                labels:['Matematyka', 'Biologia', 'Informatyka', 'Chemia', 'Historia'],
                datasets:[
                    {
                        label:'ILOSC TESTOW',
                        data:[
                            26,
                            58,
                            33,
                            12,
                            41
                        ],
                        backgroundColor:[
                            'rgb(0, 123, 255)',
                            '#6c757d',
                            '#dc3545',
                            '#ffc107',
                            '#28a745',
                        ]

                    }
                ]
            }

        }
    }

    

    static defaultProps ={
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }


    render(){
        return(
<div className ="chartBar">
    <Bar
 
        data={this.state.chartDataLine}
        width={800}
        height={800}
        options={{
            maintainAspectRatio: false,
                
            title:{
                display: this.props.displayTitle,
                text: 'ilosc pytan w testach',
                fontSize: 25
            },
            // legend:{
            //     display: this.props.displayLegend,
            //     position: this.props.legendPosition
            // }
        }}
    />            
</div>

        )



    }

}


export default ChartBar


