import {Component} from "react";
import Menu from "./Menu";
import {connect} from "react-redux";
import {addMealToMenu} from "../../state/menu-reducer";


class MenuContainer extends Component {
    componentDidMount() {

    }

    onPageChanged = (page) => {

    }

    render() {
        return (
            <Menu menu={this.props.menu} addMealToMenu={this.props.addMealToMenu}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        menu: state.menuPage.menu
    }
}

export default connect(mapStateToProps, {
    addMealToMenu
})(MenuContainer);

