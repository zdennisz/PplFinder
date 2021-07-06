import styled from "styled-components";

export const Users = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-block-start: 100px;
`;

export const Header = styled.div`
  display: flex;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 400px;
  width: 100%;
`;

export const UsersData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  max-width: 400px;
  width: 100%;
  height: 100vh;
  margin-block-start: 30px;
  overflow-y: auto;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const UserPicture = styled.img`
  border-radius: 45%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-height: 128px;
  gap: 2px;
  overflow: hidden;
`;
