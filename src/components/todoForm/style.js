import styled from 'styled-components';

export const FormWrap = styled.section`
  padding: 30px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;

export const Label = styled.label`
  margin-right: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  vertical-align: middle;
`;

export const Input = styled.input`
  width: 260px;
  height: 36px;
  border: 1px solid #ccc;
  padding: 0 10px;
  margin-right: 1.2rem;
  font-size: 0.98rem;
  border-radius: 4px;

  &.contents {
    width: 330px;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 36px;
  border: 1px solid #4b1df2;
  border-radius: 4px;
  font-size: 0.98rem;
  background-color: #4b1df2;
  color: #fff;
  font-weight: 600;
  vertical-align: middle;
`;
