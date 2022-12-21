import TodoItem from '../todoItem/TodoItem';
import { TodoListWrap, TodoTitle, List } from './style';

const TodoList = ({ isActive }) => {
  const todos = [
    { id: 1, title: '제목입니다', content: '내용입니다', isDone: true },
    { id: 2, title: '제목입니다2', content: '내용입니다2', isDone: false },
  ];

  // isActive에 따라 진행중, 완료중 나누어 렌더링
  return (
    <TodoListWrap>
      <TodoTitle>{isActive ? '🔥 진행 중 🔥' : '🎉 완료 🎉'}</TodoTitle>
      <List>
        {todos
          .filter((item) => item.isDone === !isActive)
          .map((item) => (
            <TodoItem key={item.id} item={item} />
          ))}
      </List>
    </TodoListWrap>
  );
};

export default TodoList;
