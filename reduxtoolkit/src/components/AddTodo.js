import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'



function AddTodo() {

    const[input ,setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler =(e) => {
        e.preventDeafult()

        dispatch(addTodo)


    }
  return (
    <div>
      
    </div>
  )
}

export default AddTodo
