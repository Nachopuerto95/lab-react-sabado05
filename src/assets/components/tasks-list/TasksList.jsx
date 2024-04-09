import './TasksList.css'
import TaskItem from '../task-item/TaskItem';
import dataJson from '../../../data/tasks.json';
import TaskForm from '../task-form/TaskForm';
import { useState } from 'react';

function TasksList() {
  
  const [tasks, setTasks] = useState(dataJson)

  const handleCreateTask = (task) => {
    setTasks([...tasks, {...task}]);
  }
  
  return (
    <>
      
      <div className='TaskList'>
        <TaskForm onCreate={handleCreateTask} />
        {tasks.map((task, index) => (
          <TaskItem key={index} text={task.text} id={task.id} isImportant={task.isImportant} />
        ))}
      </div>
    </>
   
  )
}
export default TasksList;

/*
  


  const handleCreateEvent = (event) => {
      setEvents([...events, {...event, id:  }]);
    }
    

return (  
  <>
  <EventForm onCreate={handleCreateEvent} />
  <div className='row row-cols-4 g-2'>
    {events.map(( event ) => (
      <div key={event.id} className='col'>
        <EventItem event= { event }
        onDelete={handleDeleteEvent} 
        onToogleFav={handleToogleFav} />
      </div>
      ))}
  </div>
  </>

)
}

*/