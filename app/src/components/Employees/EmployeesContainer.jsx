import {Component} from "react";
import {connect} from "react-redux";
import Employees from "./Employees";
import {addEmployee, getEmployees, removeEmployee} from "../../state/employee-reducer";


class EmployeeContainer extends Component {
    componentDidMount() {
        if (this.props.currentUser.isAuth) {
            this.props.getEmployees(this.props.adminUsername);
        }
    }


    render() {
        return (
            <Employees employees={this.props.employees} addEmployee={this.props.addEmployee} adminUsername={this.props.adminUsername}
                       removeEmployee={this.props.removeEmployee}
                       currentUser={this.props.currentUser}/>
        );
    }
}


function mapStateToProps(state) {
    return {
        employees: state.employeePage.employees,
        adminUsername: state.user.currentUser.username,
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps, {
    getEmployees,
    addEmployee,
    removeEmployee
})(EmployeeContainer);

