import styled from 'styled-components';

// 중앙배치를 위한 div
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

export default Container;

// section 내 헤딩태그 숨기는 용도
export const HiddenTitle = styled.h1`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;
