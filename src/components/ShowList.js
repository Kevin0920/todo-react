import React from 'react';

class ShowList extends React.Component {

    state = {
        editStatus: false
    }

    onEditing = event => {
        this.setState({
            editStatus: true
        })
    }

    onEditingDone = event => {

        if (event.keyCode === 13) {
            this.setState({
                editStatus: false
            })
        }
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
                                    <ul className="list-group" key={index}>
                                        <li 
                                        className="list-group-item"
                                        style={viewStyle}
                                        >
                                            <input 
                                                type="checkbox"
                                                style={{
                                                    fontSize: "x=large"
                                                }}
                                            />
                                            {list}

                                            <button 
                                                type="button" 
                                                className="btn btn-outline-danger"
                                                onClick={() => this.props.removeList(list)}
                                            >X</button>
                                        </li>
                                        <li
                                        className="list-group-item"
                                        >
                                            <input
                                                style={editStyle}
                                                type="text"
                                                value={this.props.term}
                                                onKeyDown={this.onEditingDone}
                                                // onChange={}
                                            />
                                        </li>
                                    </ul>
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
