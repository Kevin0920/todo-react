import React from 'react';

class ShowList extends React.Component {

    state = {
        editStatus: false,
        newText: this.props.term
    }

    componentDidMount() {
        console.log('comp mount ', this.props);
        this.setState({
            newTestArr: this.props.lists
        })
    }

    onEditing = event => {
        this.setState({
            editStatus: true
        })
    }

    onEditingDone = event => {

        if (event.keyCode === 13) {
            this.setState({
                editStatus: false,
                newText: ''
            })
        }
    }

    onEditChange = event => {
        let newText = event.target.value;
        console.log(newText);
        this.setState({
            newTestArr: newText
        })

    }
    
    render() {
        console.log(this.props.term)
        let viewStyle = {};
        let editStyle = {};

        if (this.state.editStatus) {
            viewStyle.display = 'none';
        }
        else {
            editStyle.display = 'none';
        }

        return (
            <div className="container">
                <div className="card">
                    <div className="card-body" onDoubleClick={this.onEditing}>
                        {
                            this.props.lists.map((list, index) => {
                                return (
                                    <div>
                                        <ul className="list-group">
                                            <li 
                                            className="list-group-item"
                                            key={index}
                                            style={viewStyle}
                                            >
                                                <input 
                                                    type="checkbox"
                                                    style={{
                                                        fontSize: "x=large"
                                                    }}
                                                />
                                                {this.state.newTestArr}

                                                <button 
                                                    type="button" 
                                                    className="btn btn-outline-danger"
                                                    onClick={() => this.props.removeList(list)}
                                                >X</button>
                                            </li>
                                        </ul>
                                        <input
                                            style={editStyle}
                                            type="text"
                                            value={this.state.newText}
                                            onKeyDown={this.onEditingDone}
                                            onChange={this.onEditChange}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    };
};

export default ShowList;
