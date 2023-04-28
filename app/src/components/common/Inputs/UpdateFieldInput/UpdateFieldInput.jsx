import React from "react";

class UpdateFieldInput extends React.Component {

    state = {
        editMode: false,
        value: this.props.value
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
        this.props.updateValue(this.state.value);
    }

    onStatusChange = (e) => {
        this.setState({
            value: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.value !== this.props.value){
            this.setState({
                value: this.props.value
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.value}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.value}/>
                    </div>
                }

            </div>
        )
    }
}

export default UpdateFieldInput;