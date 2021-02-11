import React from 'react';


export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (
          <div>
            <h2>{this.props.text}</h2>
            <h2>{this.props.priority}</h2>
            <h2>{this.props.dueDate}</h2>
          </div>
        );
    }

}

export class TodoList extends React.Component{
    render(){
        const lista = this.props.todoList;
        const dLista = lista.map((i) =>
            <Todo text={i.text} priority={i.priority} dueDate={i.dueDate.toString()}/>
            );

    return dLista;
    }
    
}