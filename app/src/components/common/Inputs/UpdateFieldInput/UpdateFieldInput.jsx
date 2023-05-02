import React from "react";

class UpdateFieldInput extends React.Component {

    state = {
        editMode: false,
        value: this.props.value,
        initialValue: this.props.value,
        regExp: new RegExp(this.props.regExp)
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        if (this.state.initialValue !== this.state.value) {
            this.props.updateValue(this.state.value);
        }
    }

    onStatusChange = (e) => {
        const value = e.currentTarget.value;
        const isMatched = this.state.regExp.test(value);
        if (isMatched || value === "") {
            this.setState({
                value: +value
            });
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.value !== this.props.value) {
            this.setState({
                value: this.props.value,
                initialValue: this.props.value,
                regExp: this.props.regExp
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div onDoubleClick={this.activateEditMode}>
                        <span>{this.props.value}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                               value={this.state.value}/>
                    </div>
                }

            </div>
        )
    }
}

export default UpdateFieldInput;