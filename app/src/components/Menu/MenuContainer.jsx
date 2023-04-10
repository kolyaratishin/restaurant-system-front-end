import {Component} from "react";
import Menu from "./Menu";
import {connect} from "react-redux";


class MenuContainer extends Component {
    componentDidMount() {

    }

    onPageChanged = (page) => {

    }

    render() {
        return (
            <Menu menu={this.props.menu}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        menu: state.menuPage.menu
    }
}

export default connect(mapStateToProps, {})(MenuContainer);

