import MealsCountInOrderContainer from "./MealsCountInOrder/MealsCountInOrderContainer";
import MealsGroupCountInOrderContainer from "./MealsGroupCountInOrder/MealsGroupCountInOrderContainer";

function Statistics() {
    return (
        <div>
            <MealsCountInOrderContainer/>
            <MealsGroupCountInOrderContainer/>
        </div>
    );
}

export default Statistics;