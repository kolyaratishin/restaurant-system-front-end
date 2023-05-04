import {Component} from "react";
import {connect} from "react-redux";
import Import from "./Import";
import {importMenuFromFile, stopDisplayImportSuccess} from "../../../state/import-export-reducer";
import {clearUploadError} from "../../../state/error-reducer";



class ImportContainer extends Component {

    componentWillUnmount() {
        this.props.clearUploadError();
    }

    render() {
        return (
            <Import importMenuFromFile={this.props.importMenuFromFile} restaurantId={this.props.restaurantId} uploadError={this.props.uploadError}
                    showImportSuccess={this.props.showImportSuccess} stopDisplayImportSuccess={this.props.stopDisplayImportSuccess}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        restaurantId: state.user.currentUser.restaurantId,
        uploadError: state.errors.uploadError,
        showImportSuccess: state.importExport.showSuccessImport
    }
}

export default connect(mapStateToProps, {
    importMenuFromFile,
    clearUploadError,
    stopDisplayImportSuccess,
})(ImportContainer);

