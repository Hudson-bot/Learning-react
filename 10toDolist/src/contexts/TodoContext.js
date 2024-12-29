import {createContext,useContext} from "react"


export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "Todo Message",
        completed: false
          }
    ],
    addTodo: (todo) => {},
    updateTodo:(id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

//use the crteated context
export const useTodo = () => {
    return useContext(TodoContext)//export the create context.
}

export const TodoProvider = TodoContext.Provider