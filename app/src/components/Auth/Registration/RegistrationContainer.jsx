import {Component} from "react";
import {connect} from "react-redux";
import Registration from "./Registration";
import {userApi} from "../../../api/api";

class RegistrationContainer extends Component {
    state = {
        successfulRegistration: null
    }

    componentDidMount() {
        this.setState({
            successfulRegistration: null
        })
    }

    register = (username, password) => {
        userApi.register(username, password)
            .then(() => {
                this.setState({
                    successfulRegistration: true
                })
            })
            .catch(() => {
                this.setState({
                    successfulRegistration: false
                })
            });
    }

    render() {
        return (
            <Registration register={this.register} successfulRegistration={this.state.successfulRegistration}/>
        );
    }
}


function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, {

})(RegistrationContainer);