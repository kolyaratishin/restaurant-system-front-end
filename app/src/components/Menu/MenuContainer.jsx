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

    state = {
        searchValue: "",
        searchedMeals: []
    }
    componentDidMount() {
        if (this.props.currentUser.isAuth) {
            this.props.getMenuGroups(this.props.restaurantId);
            this.setState({
                searchValue: "",
                searchedMeals: this.props.menuGroups
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.searchValue !== this.state.searchValue) {
            this.setState({
                searchValue: this.state.searchValue,
                searchedMeals:this.state.searchedMeals
            })
        }
    }

    onSearchChange = (e) => {
        const searchValue = e.currentTarget.value;
        const searchedMeals = this.filterMealBySearchValue(searchValue);
        debugger
        this.setState({
            searchValue: searchValue,
            searchedMeals: searchedMeals
        });
    }

    filterMealBySearchValue(searchValue) {
        return this.props.menuGroups.map(menuGroup => this.findMealsInMealGroup(menuGroup, searchValue))
            .filter(menuGroup => menuGroup.menu.length > 0);
    }

    findMealsInMealGroup(menuGroup, searchValue){
        const newMenuGroup = {...menuGroup};
        newMenuGroup.menu = [...newMenuGroup.menu.filter(meal => meal.name.startsWith(searchValue))]
        return newMenuGroup;
    }

    render() {
        return (
            <Menu menuGroups={this.state.searchedMeals} addMealToMenu={this.props.addMealToMenu} restaurantId={this.props.restaurantId}
                  removeMealFromMenuGroup={this.props.removeMealFromMenuGroup} addMenuGroup={this.props.addMenuGroup}
                  removeMenuGroup={this.props.removeMenuGroup} currentUser={this.props.currentUser}
                  onSearchChange={this.onSearchChange}/>
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

