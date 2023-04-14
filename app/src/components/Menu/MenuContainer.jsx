import {Component} from "react";
import Menu from "./Menu";
import {connect} from "react-redux";
import {addMealToMenu, addMenuGroup, getMenuGroups, removeMealFromMenuGroup} from "../../state/menu-reducer";


class MenuContainer extends Component {
    componentDidMount() {
        this.props.getMenuGroups(this.props.restaurantId);
    }

    onPageChanged = (page) => {

    }

    render() {
        return (
            <Menu menuGroups={this.props.menuGroups} addMealToMenu={this.props.addMealToMenu} restaurantId={this.props.restaurantId}
                  removeMealFromMenuGroup={this.props.removeMealFromMenuGroup} addMenuGroup={this.props.addMenuGroup}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        menuGroups: state.menuPage.menuGroups,
        restaurantId: state.restaurant.restaurantId
    }
}

export default connect(mapStateToProps, {
    addMealToMenu,
    getMenuGroups,
    removeMealFromMenuGroup,
    addMenuGroup
})(MenuContainer);

