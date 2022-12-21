import Inputs from './Inputs';
import { HiddenTitle } from '../Container';
import { FormWrap, Button } from './style';

const TodoForm = () => {
  return (
    <FormWrap>
      <HiddenTitle>투두 입력</HiddenTitle>
      <form>
        <Inputs label={'제목'} id={'title'} />
        <Inputs label={'내용'} id={'contents'} />
        <Button type="submit">추가</Button>
      </form>
    </FormWrap>
  );
};

export default TodoForm;
