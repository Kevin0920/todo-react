import React from 'react';
import ShowList from './ShowList';

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
        let listArr = this.state.lists;
        listArr.push(term);

        this.setState({
            lists: listArr,
            term: ''
        })
    }



    removeList = (listIndex) => {
        console.log(listIndex);
        // let list = lists[listIndex];
        // lists.splice(listIndex, 1);
        // // remove a list is done => true
        // list.done = !this.state.done;
        // list.done ? lists.push(list) : lists.unshift(list);
        // this.setState({ lists });
    };

    render() {
        return (
            <div className="ui container">
                <div className="field">
                    <label>Add List</label>
                    <input 
                        type="text" 
                        name="" 
                        placeholder="add list.."
                        value={this.state.term}
                        onChange={(e) => {this.onInputChange(e.target.value)}}
                        />
                </div>
                <button 
                    className="ui button"
                    onClick={() => {this.addList(this.state.term)}}
                    type="submit">Submit</button>
            <ShowList removeList={this.removeList} lists={this.state.lists}/>
            </div>
        )
    };
};

export default AddList;