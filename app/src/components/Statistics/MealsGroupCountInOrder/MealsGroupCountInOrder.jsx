import {Pie} from "react-chartjs-2";
import {ArcElement, Chart as ChartJS, Legend, Tooltip,} from 'chart.js';
import classes from "./MealsGroupCountInOrder.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);
function MealsGroupCountInOrder(props) {
    const labels = props.data.map(item => item.name);
    const barData = props.data.map(item => item.amount);
    const data = {
        labels,
        datasets: [
            {
                label: 'Кількість продуктів',
                data: barData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
            },
        ],
    };

    return (
        <div className={classes.pie_chart_container}>
            <h2>Кількість продуктів у певній групі у всіх замовленнях</h2>
            <Pie data={data} />
        </div>
    );
}

export default MealsGroupCountInOrder;