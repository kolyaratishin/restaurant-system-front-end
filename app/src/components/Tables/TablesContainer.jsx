import {Component} from "react";
import {connect} from "react-redux";
import Tables from "./Tables";

class TablesContainer extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <Tables tables={this.props.tables}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        tables: state.tablesPage.tables
    }
}

export default connect(mapStateToProps, {})(TablesContainer);