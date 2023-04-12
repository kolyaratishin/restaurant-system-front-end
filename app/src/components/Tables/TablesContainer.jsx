import {Component} from "react";
import {connect} from "react-redux";
import Tables from "./Tables";
import {getTables} from "../../state/table-reducer";

class TablesContainer extends Component {
    componentDidMount() {
        this.props.getTables(this.props.restaurantId);
    }

    render() {
        return (
            <Tables tables={this.props.tables} restaurantId={this.props.restaurantId}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        tables: state.tablesPage.tables,
        restaurantId: state.restaurant.restaurantId
    }
}

export default connect(mapStateToProps, {
    getTables
})(TablesContainer);