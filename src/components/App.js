import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Header from './Header';


const randomString = (length) => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}


class App extends React.Component {

    state = {
          data: [
                { "title": "Buy Milk", "status": "pending", "_id": "3QACIouhZZlhmm6T" },
                { "title": "Buy new computer book", "status": "pending", "_id": "9Xz2MSHIeh87WMgF" },
                { "title": "Fetch Money", "status": "pending", "_id": "DZvP2o5Dd4t9J3Ax" },
                { "title": "Play new game", "status": "pending", "_id": "Dp3J6BacTeG8ijV8" },
                { "title": "new 2", "status": "pending", "_id": "ECDUmbjOt4vtOKSv" },
                { "title": "Go hikking", "status": "pending", "_id": "GwHBilbjsbXipQuI" },
                { "title": "New 10", "status": "pending", "_id": "HGWGsNEVFNXIGZ8S" },
                { "title": "Travling", "status": "pending", "_id": "IExYBTFUFkGoHqyN" }
            ],
            listObj: {}
    }

    onAddToDo = (value) => {
        let newTodoList = [...this.state.data];
        newTodoList.push({"title": value, "status": "pending", "today": {"$$date": new Date()}, "_id": randomString(16)});
        this.setState({
            data: newTodoList
        });
    };

    onInputChange = (event) => {
        
    };

    render() {
        return (
            <main>
                <div className="container">
                    <Header data={this.state.data}/>
                    <TodoForm 
                        onInputChange={this.onInputChange}
                        onAddToDo={this.onAddToDo}
                        listObj={this.state.listObj}
                        />
                    <TodoList lists={this.state.data}/>
                </div>
            </main>
        )
    }
};

export default App;