import Buttons from './Buttons';
import { useDispatch } from 'react-redux';
import { TodoItemWrap, Title, Text, ButtonWrap } from './style';
import { __deleteTodos, __toggleDone } from '../../redux/modules/todoSlice';

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  // 투두 완료/취소 토글 핸들러
  const toggleDoneHandler = (id) => {
    dispatch(__toggleDone({ id }));
  };

  // 투두 삭제 핸들러
  const deleteTodoHandler = (id) => {
    if (window.confirm('해당 투두를 정말 삭제하시겠습니까?')) {
      dispatch(__deleteTodos({ id }));
    }
  };
  return (
    <TodoItemWrap>
      <Title>📍 {item.title}</Title>
      <Text>{item.content}</Text>
      <ButtonWrap>
        <Buttons onDelete={deleteTodoHandler} id={item.id} type={'delete'} name={'삭제'} />
        <Buttons onToggle={toggleDoneHandler} id={item.id} type={'done'} name={item.isDone ? '취소' : '완료'} />
      </ButtonWrap>
    </TodoItemWrap>
  );
};

export default TodoItem;
