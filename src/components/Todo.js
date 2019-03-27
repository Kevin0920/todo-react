import React from 'react';

const Todo = ({ list }) => {

    // console.log(list)
    return (
        <li className="list-group-item">
            <a href="#" name="todoTitle" data-toggle="tooltip" data-placement="top" title="Click on item to delete.">{list.title} => {list.status}</a>
        </li>
    )
};

export default Todo;