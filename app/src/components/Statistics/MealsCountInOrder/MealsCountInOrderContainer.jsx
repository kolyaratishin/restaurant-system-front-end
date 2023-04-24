import {Component} from "react";
import MealsCountInOrder from "./MealsCountInOrder";
import {statisticsApi} from "../../../api/api";
import {connect} from "react-redux";

class MealsCountInOrderContainer extends Component {

    state = {
        data: []
    }
    componentDidMount() {
        statisticsApi.getAllMealsInOrder(this.props.restaurantId)
            .then(response => {
                this.setState({
                    data: response.data
                })
            });
    }

    render() {
        return (
            <MealsCountInOrder data={this.state.data}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        restaurantId: state.user.currentUser.restaurantId,
    }
}

export default connect(mapStateToProps, {
})(MealsCountInOrderContainer);
