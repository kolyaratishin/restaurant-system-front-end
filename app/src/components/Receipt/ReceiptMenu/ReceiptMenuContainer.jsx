import {Component} from "react";
import {connect} from "react-redux";
import {addMealToReceipt} from "../../../state/receipt-reducer";
import ReceiptMenu from "./ReceiptMenu";

class ReceiptMenuContainer extends Component {

    state = {
        searchValue: "",
        searchedMeals: []
    }

    componentDidMount() {
        this.setState({
            searchValue: "",
            searchedMeals: this.props.menuGroups
        })
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
            <ReceiptMenu currentReceipt={this.props.currentReceipt}
                         menuGroups={this.state.searchedMeals}
                         addMealToReceipt={this.props.addMealToReceipt}
                         onSearchChange={this.onSearchChange}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        currentReceipt: state.receiptPage.currentReceipt,
        menuGroups: state.menuPage.menuGroups,
    }
}


export default connect(mapStateToProps,
    {
        addMealToReceipt,
    })
(ReceiptMenuContainer);