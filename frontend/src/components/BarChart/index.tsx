import React, { useEffect, useState } from 'react';
import 'assets/css/styles.css';
import Chart from 'react-apexcharts';
import axios from 'axios';
import { BASE_URL } from 'Utils/requests';
import { SalesSuccess } from 'types/sale';
import { round } from 'Utils/format';

type seriesData = {
    name: string;
    data: number[];
}

type chartData = {
    labels: {
        categories: string[];
    }
    series: seriesData[];

}

function BarChart() {

    const [chartData, setChartData] = useState<chartData>(
        {
            labels: {
                categories: []
            },
            series: [
                {
                    name: "",
                    data: []
                }
            ]

        });

        useEffect(() =>{

            axios.get(`${BASE_URL}/sales/sucess-by-seller`)
            .then(response => {
                const data = response.data as SalesSuccess[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => round(100.0  * x.deals / x.visited,1));
                setChartData({
                    labels: {
                        categories: myLabels
                    },
                    series: [
                        {
                            name: "% de Sucesso",
                            data: mySeries
                        }
                    ]
        
                });
                

            });
        }, []);


    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    /*const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]
            }
        ]
    };*/


    return (

        <Chart
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar"
            height="240"
        />
    );
}

export default BarChart;
