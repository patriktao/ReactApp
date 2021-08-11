
import Task from './Task'

/* We are passing 'tasks' data from App.js and looping through every key in the 
array with tasks.map() to display each and one of them.
*/

const Tasks = ({ tasks, onDelete, onToggle}) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task ={task} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </div>
  )
}

export default Tasks;
