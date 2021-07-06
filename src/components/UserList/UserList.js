import React, { useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import IconButton from "@material-ui/core/IconButton";
import BlockIcon from "@material-ui/icons/Block";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";

const UserList = ({ users, isLoading }) => {
  const [hoveredUserId, setHoveredUserId] = useState();

  const handleMouseEnter = (id) => {
    setHoveredUserId(id);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  return (
    <S.UserList>
      {users.map((user) => {
        return (
          <S.User
            key={user?.id?.value}
            onMouseEnter={() => handleMouseEnter(user?.id?.value)}
            onMouseLeave={handleMouseLeave}
          >
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
            <S.IconButtons isHovered={user?.id?.value === hoveredUserId}>
              <S.IconButtonWrapper>
                <IconButton>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
              <S.IconButtonWrapper>
                <IconButton>
                  <BlockIcon color="disabled" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.IconButtons>
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
