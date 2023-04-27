import {Component} from "react";
import {connect} from "react-redux";
import ImportExport from "./ImportExport";


class ImportExportContainer extends Component {

    render() {
        return (
            <ImportExport currentUser={this.props.currentUser}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps, {
})(ImportExportContainer);

