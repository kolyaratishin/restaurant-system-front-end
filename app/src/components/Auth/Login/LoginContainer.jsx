import {Component} from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {login} from "../../../state/user-reducer";

class LoginContainer extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <Login login={this.props.login}/>
        );
    }
}


function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, {
    login
})(LoginContainer);