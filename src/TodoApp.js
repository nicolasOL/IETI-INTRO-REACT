import React from 'react';
import {Todo,TodoList} from './Todo';


const listaU = [];

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' ,priority: 0};
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);
    this.handleSubmitPriority = this.handleSubmitPriority.bind(this);
  }

  render() {
    const todos = [{text:"Learn React", priority:5, dueDate: new Date() }, {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },    {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }];  
    return (
      <div>
        <h3>TODO</h3>
        <TodoList todoList={this.state.items} /> 
        <form onSubmit={this.handleSubmitPriority}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChangeText}
            value={this.state.text}
          />
          <input
            id="new-todo"
            onChange={this.handleChangePriority}
            value={this.state.value}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  
  handleChangeText(e){
	  this.setState({ text: e.target.value });
  }
  
  handleChangePriority(e){
	  this.setState({ priority: e.target.value});
  }

  handleSubmitPriority(e) {
        listaU.push({text: this.state.text, priority: this.state.priority, dueDate: new Date()});
        this.setState({ items: listaU });
        alert('A TODO element was submitted: ');
        e.preventDefault();
  }
  /*
   * handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
     }
   */
  
}