import React from 'react';
import {observable, action} from 'mobx';


export const TodoStore = observable({
  todo: [ {
    task: String,
    completed:null as unknown as boolean
  },
  
],
  addTodo: action((task:any) => {
    TodoStore.todo.push({
        task,
        completed:false
      });
  }),
  removeTodo: action((task:any)=>{
      const toRemove=TodoStore.todo.find(todo=>todo.task===task);
      if(toRemove){
          const removeIndex=TodoStore.todo.indexOf(toRemove);
          TodoStore.todo.splice(removeIndex,1);
      }


  }),
});

