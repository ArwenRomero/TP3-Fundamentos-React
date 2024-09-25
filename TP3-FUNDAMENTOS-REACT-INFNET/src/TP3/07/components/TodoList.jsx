import { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const tasks = [
      'Entregar o TP',
      'Revisar para o AT',
      'Dormir',
      'Acordar e fazer o AT'
    ];

    return (
      <div>
        <h1>Lista de Tarefas</h1>
        <ul>
          {tasks.map((task, index) => (
            <TodoItem key={index} task={task} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;