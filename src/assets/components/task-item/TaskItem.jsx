import './TaskItem.css'

function TaskItem({text, id, isImportant }) {

  return (
    <div className={`TaskItem  ${isImportant ? 'task-important' : ''}`}>
        <p>{text}</p>
    </div>
  )

  TaskItem.defaultProps = {
    text: '',
    id: 0,
    isImportant: false
  }

}

export default TaskItem;