import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='task-list' className='overflow-x-auto h-[55%] w-full py-4  mt-4 flex items-center jusity-start gap-5  flex-nowrap'>

    

   {data.tasks.map((elem ,idx)=>{
      
     if(elem.newTask){
        return <NewTask key={idx} data={elem} />}
     else if(elem.active){
        return <AcceptTask key={idx} data={elem} />
     }
     else if(elem.completed){
        return <CompletedTask key={idx} data={elem}   />
     }
     else if(elem.failed){
        return <FailedTask key={idx} data={elem} />
     }


    })}

        
       
      
        
    </div>
  )
}

export default TaskList