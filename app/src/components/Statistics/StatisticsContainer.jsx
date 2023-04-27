import {Component} from "react";
import {connect} from "react-redux";
import Statistics from "./Statistics";

class StatisticsContainer extends Component {

    render() {
        return (
            <Statistics currentUser={this.props.currentUser}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps, {
})(StatisticsContainer);