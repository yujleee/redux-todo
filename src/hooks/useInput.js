import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { __addTodos } from '../redux/modules/todoSlice';

const useInput = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  // 제목 입력값 상태 변화
  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  // 내용 입력값 상태 변화
  const changeContentHandler = (event) => {
    setContent(event.target.value);
  };

  // 투두 추가
  const submitHandler = (event) => {
    event.preventDefault();

    // 제목이나 내용이 없는 경우 경고 띄워주고 focus
    if (!title || !content) {
      if (!title) {
        alert('제목을 입력해주세요.');
      } else {
        alert('내용을 입력해주세요.');
      }

      return false;
    }

    const newTodo = {
      id: nanoid(),
      title,
      content,
      isDone: false,
    };

    dispatch(__addTodos(newTodo));

    setTitle('');
    setContent('');
    return true;
  };

  return { title, content, changeTitleHandler, changeContentHandler, submitHandler };
};

export default useInput;
