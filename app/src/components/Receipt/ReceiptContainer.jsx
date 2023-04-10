import {Component} from "react";
import {connect} from "react-redux";
import Receipt from "./Receipt";
import {withRouter} from "../../hoc/withRouter";
import {compose} from "redux";
import {countReceipt, getReceiptById} from "../../state/receipt-reducer";

class ReceiptContainer extends Component {
    componentDidMount() {
        let tableId = +this.props.params.tableId;
        this.props.getReceiptById(tableId);
    }

    render() {
        return (
            <Receipt currentReceipt={this.props.currentReceipt} countReceipt={this.props.countReceipt}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        currentReceipt: state.receiptPage.currentReceipt
    }
}
export default compose(
    connect(mapStateToProps,
        {
            getReceiptById,
            countReceipt
        }),
    withRouter,
)(ReceiptContainer);