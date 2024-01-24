import React from 'react'
import Task from './Task'
import { useStore } from 'zustand'

const Column = ({state}) => {
    // const tasks = useStore((store)=>store.tasks.filter((task)=>task.state === state))
    // useStore((store)=>store.tasks.filter((task)=>task.state===state))
  return (
    <div className='h-64 bg-blue-300'>
        <p className='text-lg'>{state}</p>
      <Task tittle={"tasks.title"}/>
    </div>
  )
}

export default Column
