import React from 'react';

const ShowList = ({ lists, removeList }) => {
    console.log(lists);
    return (
        <div className="ui cards">
            <div className="card">
                <div className="content">
                {
                    lists.map((list, index) => {
                        return (
                            <div 
                                key={index}
                                className="description"
                                onClick={removeList}
                                >
                                {list}
                            </div>
                        )
                    })
                }
                
                </div>
            </div>
        </div>
    )
};

export default ShowList;
