import React from 'react';
import Alert from './Alert';

const validateObject = (object) => {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
};

const validation = (value) => {
    const errorMsg = [];

    if (validateObject(value)) {
        errorMsg.push('Input field cannot be empty');
    }
    return errorMsg;
};
 
class TodoForm extends React.Component {
    
    state = {
        value: this.props.listObj,
        errorMsg: [],

    }

    onInputChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            value: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        
        const { value } = this.state;
        console.log(this.state.value);  

        const errorMsg = validation(value);

        if (errorMsg.length > 0) {
            this.setState({ errorMsg })
            return <Alert errorMsg={this.state.errorMsg} />
        }

        // let newTodoTitle = event.target.querySelector('input[name="todoTitle"]');
        this.props.onAddToDo(this.input.value);
        event.target.reset();
    }

    clearForm = () => {
        this.form.reset();
    }

    render() {
        // console.log(this.props.listObj);
        return (
        <div>
            <form
                ref={(el) => this.form = el}
                onSubmit={this.onSubmit}>
                <input
                ref={(inputVal) => this.input = inputVal}
                className="form-control col-md-12 add-form"
                onChange={this.onInputChange}
                />
            </form>
            {/* <Alert/> */}
        </div>
    )
    }
};

export default TodoForm;
