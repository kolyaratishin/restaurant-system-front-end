import {Bar} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



function MealsCountInOrder(props) {
    const labels = props.data.map(item => item.name);
    const barData = props.data.map(item => item.amount);
    const data = {
        labels,
        datasets: [
            {
                label: 'Кількість продуктів у всіх замовленнях',
                data: barData,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (
        <div>
            <h2>Кількість продуктів у всіх замовленнях</h2>
            <Bar data={data} />
        </div>
    );
}

export default MealsCountInOrder;