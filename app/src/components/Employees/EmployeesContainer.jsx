import {Component} from "react";
import {connect} from "react-redux";
import Employees from "./Employees";
import {addEmployee, getEmployees, removeEmployee} from "../../state/employee-reducer";


class EmployeeContainer extends Component {
    componentDidMount() {
        this.props.getEmployees(this.props.adminUsername);
    }


    render() {
        return (
            <Employees employees={this.props.employees} addEmployee={this.props.addEmployee} adminUsername={this.props.adminUsername}
                       removeEmployee={this.props.removeEmployee}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        employees: state.employeePage.employees,
        adminUsername: state.user.currentUser.username
    }
}

export default connect(mapStateToProps, {
    getEmployees,
    addEmployee,
    removeEmployee
})(EmployeeContainer);

