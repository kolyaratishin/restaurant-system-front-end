import {Component} from "react";
import {connect} from "react-redux";
import Receipt from "./Receipt";
import {withRouter} from "../../hoc/withRouter";
import {compose} from "redux";
import {addMealToReceipt, countReceipt, getReceiptById, removeMealFromReceipt} from "../../state/receipt-reducer";
import {getMenuGroups} from "../../state/menu-reducer";

class ReceiptContainer extends Component {
    componentDidMount() {
        let tableId = +this.props.params.tableId;
        this.props.getReceiptById(tableId);
        this.props.getMenuGroups(this.props.restaurantId);
    }

    render() {
        return (
            <Receipt currentReceipt={this.props.currentReceipt} countReceipt={this.props.countReceipt} menuGroups={this.props.menuGroups}
                     addMealToReceipt={this.props.addMealToReceipt} removeMealFromReceipt={this.props.removeMealFromReceipt}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        currentReceipt: state.receiptPage.currentReceipt,
        menuGroups: state.menuPage.menuGroups,
        restaurantId: state.restaurant.restaurantId
    }
}
export default compose(
    connect(mapStateToProps,
        {
            getReceiptById,
            countReceipt,
            addMealToReceipt,
            removeMealFromReceipt,
            getMenuGroups
        }),
    withRouter,
)(ReceiptContainer);