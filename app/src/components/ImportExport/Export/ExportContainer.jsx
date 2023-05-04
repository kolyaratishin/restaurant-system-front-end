import {Component} from "react";
import {connect} from "react-redux";
import Export from "./Export";
import {exportMenuToFile} from "../../../state/import-export-reducer";


class ExportContainer extends Component {


    render() {
        return (
            <Export exportMenuToFile={this.props.exportMenuToFile} restaurantId={this.props.restaurantId}
                    exportError={this.props.exportError}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        restaurantId: state.user.currentUser.restaurantId,
        exportError: state.errors.exportError
    }
}

export default connect(mapStateToProps, {
    exportMenuToFile
})(ExportContainer);

