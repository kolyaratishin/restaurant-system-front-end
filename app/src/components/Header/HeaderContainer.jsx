import {Component} from "react";
import {connect} from "react-redux";
import Header from "./Header";


class HeaderContainer extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <Header currentUser={this.props.currentUser}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps, {
})(HeaderContainer);

