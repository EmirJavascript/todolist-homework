import { useDispatch } from 'react-redux'
import { todoActions } from "../../store/todoSlice"
import styled from "styled-components"

const StyledLi = styled.li`
  list-style: none;
  margin-bottom: 6px;
  
  &:hover {
    color: blue;
  }
  & input {
    margin-right: 15px;
    cursor: pointer;
  }
`

const StyledSpan = styled.span`
  text-decoration: ${(props) => props.isDone ? 'line-through' : 'none'};
`

export const TodoItem = ({ id, text, isDone }) => {
  const dispatch = useDispatch()
  const handleToggleTodo = () => {
    dispatch(todoActions.toggleTodo(id))
  }

  return (
    <StyledLi>
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleToggleTodo}
      />
      <StyledSpan isDone={isDone}>{text}</StyledSpan>
    </StyledLi>
  )
}
