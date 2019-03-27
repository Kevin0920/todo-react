import React from 'react';


class TodoForm extends React.Component {
    
    state = {
        value: this.props.listObj,
        
    }

    onInputChange = (event) => {
        console.log(event.target.value);
        this.setState({
            value: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target);
        let newTodoTitle = event.target.querySelector('input[name="todoTitle"]');
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
        </div>
    )
    }
};

export default TodoForm;
