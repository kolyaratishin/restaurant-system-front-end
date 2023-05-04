import {Component} from "react";
import {connect} from "react-redux";
import Import from "./Import";
import {importMenuFromFile} from "../../../state/menu-reducer";
import {clearUploadError} from "../../../state/error-reducer";



class ImportContainer extends Component {

    componentWillUnmount() {
        this.props.clearUploadError();
    }

    render() {
        return (
            <Import importMenuFromFile={this.props.importMenuFromFile} restaurantId={this.props.restaurantId} uploadError={this.props.uploadError}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        restaurantId: state.user.currentUser.restaurantId,
        uploadError: state.errors.uploadError
    }
}

export default connect(mapStateToProps, {
    importMenuFromFile,
    clearUploadError,
})(ImportContainer);

