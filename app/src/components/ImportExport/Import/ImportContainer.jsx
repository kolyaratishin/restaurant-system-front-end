import {Component} from "react";
import {connect} from "react-redux";
import Import from "./Import";
import {importMenuFromFile} from "../../../state/menu-reducer";



class ImportContainer extends Component {


    render() {
        return (
            <Import importMenuFromFile={this.props.importMenuFromFile} restaurantId={this.props.restaurantId}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        restaurantId: state.user.currentUser.restaurantId
    }
}

export default connect(mapStateToProps, {
    importMenuFromFile
})(ImportContainer);

