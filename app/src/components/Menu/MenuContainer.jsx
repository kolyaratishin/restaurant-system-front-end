import {Component} from "react";
import Menu from "./Menu";
import {connect} from "react-redux";
import {
    addMealToMenu,
    addMenuGroup,
    getMenuGroups,
    removeMealFromMenuGroup,
    removeMenuGroup
} from "../../state/menu-reducer";


class MenuContainer extends Component {
    componentDidMount() {
        if (this.props.currentUser.isAuth) {
            this.props.getMenuGroups(this.props.restaurantId);
        }
    }

    onPageChanged = (page) => {

    }

    render() {
        return (
            <Menu menuGroups={this.props.menuGroups} addMealToMenu={this.props.addMealToMenu} restaurantId={this.props.restaurantId}
                  removeMealFromMenuGroup={this.props.removeMealFromMenuGroup} addMenuGroup={this.props.addMenuGroup}
                  removeMenuGroup={this.props.removeMenuGroup} currentUser={this.props.currentUser}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        menuGroups: state.menuPage.menuGroups,
        restaurantId: state.user.currentUser.restaurantId,
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps, {
    addMealToMenu,
    getMenuGroups,
    removeMealFromMenuGroup,
    addMenuGroup,
    removeMenuGroup
})(MenuContainer);

