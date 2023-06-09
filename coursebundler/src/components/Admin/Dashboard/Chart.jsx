import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, ArcElement, Legend } from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, ArcElement, Legend
);

export const LineChart = () => {
    
    const labels = getLastYearMonths();
    // const labels = ['Fahad', 'Raza', 'abc1', 'abc2'];
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom" ,
            },
            title: {
                display: true, 
                text: "Yearly Views",
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: "Views",
                data:[1,2,3,4],
                borderColor: "rgba(107, 70, 193, 0.5)",
                backgroundColor: "#6b46c1",
            },
        ],
    };
  
  
  return <Line data={data} options={options} />;

};

export const DoughnutChart = () => {
    const data = {
        labels: ['Subscribed', 'Not Subscribed'],
        datasets: [
            {
                label: "Views",
                data:[3,20],
                borderColor: ['rgb(62,12,171)','rgb(214,43,129)'],
                backgroundColor: ['rgba(62,12,171,0.5)','rgba(214,43,129,0.3)'],
                borderWidth: 1,
            },
        ],
    };

    return <Doughnut data={data} />;
};

function getLastYearMonths() {
    
    const labels = [];

    const months = [
        'January',
        'Febraury',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'october',
        'November',
        'December',
    ];

    const currentMonth = new Date().getMonth();
    // console.log(currentMonth);
    // const remain = 11 - currentMonth;

    for(let i = currentMonth; i < months.length; i-- ) {
        const element = months[i];
        labels.unshift(element);

        if(i === 0) break;
    }

    console.log(labels);

    for(let i = 11; i > currentMonth ; i-- ) {
        if(i === currentMonth) break;
        const element = months[i];
        labels.unshift(element);
    }

    return labels;

    // console.log(labels);
}

getLastYearMonths();
