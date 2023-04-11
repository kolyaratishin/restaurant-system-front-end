import {Component} from "react";
import {connect} from "react-redux";
import Receipt from "./Receipt";
import {withRouter} from "../../hoc/withRouter";
import {compose} from "redux";
import {addMealToReceipt, countReceipt, getReceiptById, removeMealFromReceipt} from "../../state/receipt-reducer";

class ReceiptContainer extends Component {
    componentDidMount() {
        let tableId = +this.props.params.tableId;
        this.props.getReceiptById(tableId);
    }

    render() {
        return (
            <Receipt currentReceipt={this.props.currentReceipt} countReceipt={this.props.countReceipt} menu={this.props.menu}
                     addMealToReceipt={this.props.addMealToReceipt} removeMealFromReceipt={this.props.removeMealFromReceipt}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        currentReceipt: state.receiptPage.currentReceipt,
        menu: state.menuPage.menu
    }
}
export default compose(
    connect(mapStateToProps,
        {
            getReceiptById,
            countReceipt,
            addMealToReceipt,
            removeMealFromReceipt
        }),
    withRouter,
)(ReceiptContainer);