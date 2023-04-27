import MealsCountInOrderContainer from "./MealsCountInOrder/MealsCountInOrderContainer";
import MealsGroupCountInOrderContainer from "./MealsGroupCountInOrder/MealsGroupCountInOrderContainer";
import {Navigate} from "react-router-dom";

function Statistics(props) {
    if (!props.currentUser.isAuth){
        return <Navigate to={"/login"}/>
    }
    return (
        <div>
            <MealsCountInOrderContainer/>
            <MealsGroupCountInOrderContainer/>
        </div>
    );
}

export default Statistics;