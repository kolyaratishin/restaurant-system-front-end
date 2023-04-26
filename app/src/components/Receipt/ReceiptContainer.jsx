import {Component} from "react";
import {connect} from "react-redux";
import Receipt from "./Receipt";
import {withRouter} from "../../hoc/withRouter";
import {compose} from "redux";
import {addMealToReceipt, countReceipt, getReceiptById, removeMealFromReceipt} from "../../state/receipt-reducer";
import {getMenuGroups} from "../../state/menu-reducer";
import {getCurrentTableById, setStatus} from "../../state/table-reducer";

class ReceiptContainer extends Component {

    componentDidMount() {
        let tableId = +this.props.params.tableId;
        this.props.getReceiptById(tableId);
        this.props.getMenuGroups(this.props.restaurantId);
        this.props.getCurrentTableById(tableId);
    }

    findCurrentTable(id, tables) {
        return tables.find(table => table.id === id);
    }

    render() {
        return (
            <Receipt currentReceipt={this.props.currentReceipt} countReceipt={this.props.countReceipt}
                     menuGroups={this.props.menuGroups}
                     addMealToReceipt={this.props.addMealToReceipt}
                     removeMealFromReceipt={this.props.removeMealFromReceipt}
                     currentTable={this.props.currentTable}
                     setStatus={this.props.setStatus}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        currentReceipt: state.receiptPage.currentReceipt,
        menuGroups: state.menuPage.menuGroups,
        restaurantId: state.user.currentUser.restaurantId,
        currentTable: state.tablesPage.currentTable
    }
}

export default compose(
    connect(mapStateToProps,
        {
            getReceiptById,
            countReceipt,
            addMealToReceipt,
            removeMealFromReceipt,
            getMenuGroups,
            getCurrentTableById,
            setStatus
        }),
    withRouter,
)(ReceiptContainer);