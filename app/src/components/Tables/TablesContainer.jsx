import {Component} from "react";
import {connect} from "react-redux";
import Tables from "./Tables";
import {addTable, getTables} from "../../state/table-reducer";

class TablesContainer extends Component {
    componentDidMount() {
        this.props.getTables(this.props.restaurantId);
    }

    render() {
        return (
            <Tables tables={this.props.tables} restaurantId={this.props.restaurantId} addTable={this.props.addTable}
            currentUser={this.props.currentUser}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        tables: state.tablesPage.tables,
        restaurantId: state.user.currentUser.restaurantId,
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps, {
    getTables,
    addTable
})(TablesContainer);