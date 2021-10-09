import styled from "styled-components";

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 500px;
  height: calc(100vh - 270px);
  margin-block-start: 30px;
  overflow-y: auto;
`;


export const Filters = styled.div`
  display: flex;
  justify-content: center;
  & > * {
    margin-inline-end: 8px;
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
