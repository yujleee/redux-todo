import styled from 'styled-components';

export const TodoListWrap = styled.section`
  width: 100%;
  padding: 30px;
  border: 1px solid #eee;
  border-top: none;

  :last-child {
    margin-bottom: 40px;
  }
`;

export const TodoTitle = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  min-height: 200px;
`;
