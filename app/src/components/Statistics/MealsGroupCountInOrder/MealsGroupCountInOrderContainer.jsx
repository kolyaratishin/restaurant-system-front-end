import {Component} from "react";
import MealsGroupCountInOrder from "./MealsGroupCountInOrder";
import {statisticsApi} from "../../../api/api";
import {connect} from "react-redux";

class MealsGroupCountInOrderContainer extends Component {

    state = {
        data: []
    }
    componentDidMount() {
        statisticsApi.getAllMealsGroupInOrder(this.props.restaurantId)
            .then(response => {
                this.setState({
                    data: response.data
                })
            });
    }

    render() {
        return (
            <MealsGroupCountInOrder data={this.state.data}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        restaurantId: state.user.currentUser.restaurantId,
    }
}

export default connect(mapStateToProps, {
})(MealsGroupCountInOrderContainer);
