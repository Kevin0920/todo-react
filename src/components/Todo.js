import React from 'react';
import Popup from './Popup';

const Todo = ({ list, onRemoveItem }) => {

    console.log(list);
    return (
        <div>
            <li className="list-group-item">
                <a href="#" name="todoTitle" data-toggle="modal" data-target="#exampleModal" data-placement="top" title="Click on item to delete.">Id: {list._id}: {list.title} => {list.status}</a>

                <button className="btn btn-danger float-right" onClick={() => {onRemoveItem(list._id)}}>Delete</button>
                <button style={{marginRight: "10px"}} className="btn btn-primary float-right">Edit</button>
            </li>

            <Popup list={list} />
        </div>
    )
};

export default Todo;