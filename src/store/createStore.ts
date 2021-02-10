import React from 'react';
import {TodoStore} from './store';


export const todoContext = React.createContext(TodoStore);


export const useStore = () => React.useContext(todoContext);

