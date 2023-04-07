import './index.css'

const TodoItem = props => {
  const {eachTodo, deleteTodoList} = props
  const {id, title} = eachTodo

  const deleteTodo = () => {
    deleteTodoList(id)
  }

  return (
    <li className="list-container">
      <p>{title}</p>
      <button className="button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
