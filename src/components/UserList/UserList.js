import React from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import * as S from "./style";

const UserList = ({ users, isLoading }) => {
  return (
    <S.UserList>
      {users.map((user) => {
        return (
          <S.User key={user?.id?.value}>
            <S.UserPicture src={user?.picture.large} alt="" />
            <S.UserInfo>
              <Text size="22px" bold>
                {user?.name.title} {user?.name.first} {user?.name.last}
              </Text>
              <Text size="14px">{user?.email}</Text>
              <Text size="14px">
                {user?.location.street.number} {user?.location.street.name}
              </Text>
              <Text size="14px">
                {user?.location.city} {user?.location.country}
              </Text>
            </S.UserInfo>
          </S.User>
        );
      })}
      {isLoading && (
        <S.SpinnerWrapper>
          <Spinner color="primary" size="45px" thickness={5} variant="indeterminate" />
        </S.SpinnerWrapper>
      )}
    </S.UserList>
  );
};

export default UserList;
