import React from 'react';
import Chart from 'react-apexcharts';

export default function ChartGrafico() {
    const options = {
        labels: ['Produto 1', 'Produto 2', 'Produto 3', 'Produto 4'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 300
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    const series = [30, 20, 15, 10]; // Quantidades vendidas

    return (
        <div>
            <p>Veja quais produtos mais vendidos</p>
            <Chart options={options} series={series} type="pie" width={400} />
        </div>
    );
}


