import {Component} from "react";
import {connect} from "react-redux";
import Logout from "./Logout";
import {logout} from "../../../state/user-reducer";
import {withRouter} from "../../../hoc/withRouter";

class LogoutContainer extends Component {
    render() {
        return (
            <Logout logout={this.props.logout} navigate={this.props.navigate}/>
        );
    }
}


function mapStateToProps(state) {
    return {

    }
}

const withRouterLogoutContainer = withRouter(LogoutContainer);

export default connect(mapStateToProps, {
    logout
})(withRouterLogoutContainer);