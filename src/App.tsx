import React from 'react';
import {observer} from 'mobx-react';
import {useStore} from './store/createStore';
import { TodoStore } from './store/store';



const Counter = () => {
  const store= useStore()
  return <div>
     <h1>Completed:{store.todo.filter(todos=>todos.completed==true).length}</h1>
    <h1>Not Completed:{store.todo.filter(todos=>todos.completed==false).length}</h1>
    <input></input>
    <button type='reset'  onClick={()=>store.addTodo(document.querySelector('input')?.value)} >ADD</button>
    <ol>{store.todo.map(todos=><li>{todos.task}<span><button onClick={()=>todos.completed=!todos.completed}>{todos.completed?'Completed':'Not Completed'}</button>
      <button onClick={()=>store.removeTodo(document.querySelector('input')?.value)}>REMOVE</button></span></li>)}</ol>
   

    </div>
}

export default observer(Counter);