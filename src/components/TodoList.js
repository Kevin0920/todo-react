import React from 'react';
import Todo from './Todo';

const TodoList = ({ lists }) => {
    // console.log(lists);

    const listDetail = lists.map(list => {
        return (
            <Todo key={list._id} list={list} />
        )
    })

    return (
        <ul className="list-group" style={{ marginTop: '30px' }}>{listDetail}</ul>
    )
};

export default TodoList;
