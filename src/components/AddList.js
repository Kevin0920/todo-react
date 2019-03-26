import React from 'react';
import ShowList from './ShowList';
import Alert from './Alert';

class AddList extends React.Component {
    state = {
        term: '',
        lists: [],
        done: false
    };

    onInputChange = term => {
        
        this.setState({
            term: term
        })
    }
    // first way to submit the form data 
    // onFormSubmit = event => {
    //     event.preventDefault();
    //     this.setState({
    //         lists: [this.state.term],
    //         term: ''
    //     })
    // };

    addList = term => {
        console.log(term);

        let listArr = this.state.lists;
        listArr.push(term);

        this.setState({
            lists: listArr,
            term: ''
        })
    }

    removeList = (index) => {
        // console.log(index);
        // copy the old state 
        const newList = [...this.state.lists].filter(list => {
            return list !== index;
        });
        // newList.splice(index, 1); 

        this.setState({
            lists: newList
        });
    };
    

    render() {
        return (
            <div className="container">
                <div className="">
                    <div className="">
                        <label>Add List</label>
                        <input 
                            className="form-control"
                            type="text" 
                            name="" 
                            placeholder="add list.."
                            value={this.state.term}
                            // term={this.state.term}
                            onChange={(e) => {this.onInputChange(e.target.value)}}
                            />
                            <button 
                                className="btn btn-primary"
                                onClick={() => {this.addList(this.state.term)}}
                                type="submit">Submit</button>
                    </div>
                </div>
            <ShowList 
                removeList={this.removeList} 
                lists={this.state.lists}
                term={this.state.term}
                />
            </div>
        )
    };
};

export default AddList;