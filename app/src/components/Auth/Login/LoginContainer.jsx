import {Component} from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {login} from "../../../state/user-reducer";
import {setLoginError} from "../../../state/error-reducer";

class LoginContainer extends Component {
    componentDidMount() {

    }

    componentWillUnmount() {
        this.props.setLoginError(false);
    }

    render() {
        return (
            <Login login={this.props.login} isAuth={this.props.isAuth} loginError={this.props.loginError}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        isAuth: state.user.currentUser.isAuth,
        loginError: state.errors.loginError
    }
}

export default connect(mapStateToProps, {
    login,
    setLoginError
})(LoginContainer);