import Buttons from './Buttons';
import { TodoItemWrap, Title, Text, ButtonWrap } from './style';

const TodoItem = ({ item }) => {
  return (
    <TodoItemWrap>
      <Title>📍 {item.title}</Title>
      <Text>{item.content}</Text>
      <ButtonWrap>
        <Buttons id={item.id} type={'delete'} name={'삭제'} />
        <Buttons id={item.id} type={'done'} name={item.isDone ? '취소' : '완료'} />
      </ButtonWrap>
    </TodoItemWrap>
  );
};

export default TodoItem;
