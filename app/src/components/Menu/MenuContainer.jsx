import {Component} from "react";
import Menu from "./Menu";
import {connect} from "react-redux";
import {addMealToMenu, getMenu} from "../../state/menu-reducer";


class MenuContainer extends Component {
    componentDidMount() {
        this.props.getMenu(this.props.restaurantId);
    }

    onPageChanged = (page) => {

    }

    render() {
        return (
            <Menu menu={this.props.menu} addMealToMenu={this.props.addMealToMenu} restaurantId={this.props.restaurantId}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        menu: state.menuPage.menu,
        restaurantId: state.restaurant.restaurantId
    }
}

export default connect(mapStateToProps, {
    addMealToMenu,
    getMenu
})(MenuContainer);

