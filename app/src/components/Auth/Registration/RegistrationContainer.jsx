import {Component} from "react";
import {connect} from "react-redux";
import Registration from "./Registration";
import {register} from "../../../state/user-reducer";

class RegistrationContainer extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <Registration register={this.props.register}/>
        );
    }
}


function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, {
    register
})(RegistrationContainer);