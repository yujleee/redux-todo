import Inputs from './Inputs';
import { HiddenTitle } from '../Container';
import { FormWrap, Button } from './style';

import useInput from '../../hooks/useInput';

const TodoForm = () => {
  const { title, content, changeTitleHandler, changeContentHandler, submitHandler } = useInput();

  return (
    <FormWrap>
      <HiddenTitle>투두 입력</HiddenTitle>
      <form onSubmit={submitHandler}>
        <Inputs label={'제목'} id={'title'} value={title} onChange={changeTitleHandler} />
        <Inputs label={'내용'} id={'contents'} value={content} onChange={changeContentHandler} />
        <Button type="submit">추가</Button>
      </form>
    </FormWrap>
  );
};

export default TodoForm;
