
export const todoReducer = (initialState, action ) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            //en caso de que se nos pase agregar la funcion y no marque error
            return [...initialState, action.payload]

        case '[TODO] Remove TODO':
            return initialState.filter(todo => todo.id !== action.payload)
            
        case '[TODO Toggle Todo':
            return initialState.map( todo => {
                if(todo.id === action.payload) {
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })    
        default:
            return initialState;
    }
} 
 