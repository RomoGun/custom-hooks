import { useEffect, useReducer } from 'react';
import { todoReducer } from "./todoReducer";

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];//arreglo vacio por todos es igual a null
    }

export const useTodos = () => {
        //cuando se tiene mas de una accion se escribe DispatchTodos
        //al no tener inicializacion del initialstate se puede poner un arreglo vacio
        const [todos, dispatch] = useReducer(todoReducer, [], init);
    
        useEffect(() => {
          localStorage.setItem('todos', JSON.stringify(todos) );
        }, [todos]);
        
    
        const handleNewTodo = (todo) => {
            const action = {
                type: '[TODO] Add Todo',
                payload: todo,
            }
            dispatch(action);
        };
    
        const handleDeleteTodo = (id) => {
            dispatch({
                type: '[TODO] Remove TODO',
                payload: id,
            })
        }
        const handleonToggleTodo = (id) => {
            dispatch({
                type: '[TODO Toggle Todo',
                payload: id,
            })
        }

    return{
        todos, 
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleDeleteTodo, 
        handleonToggleTodo, 
        handleNewTodo
    }
}
