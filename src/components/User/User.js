import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Text from "components/Text";
import * as S from "./style";

const User = ({ user, index, lastUser, handleMouseEnter, handleMouseLeave, handleSaveFavUsers, favUser, hoveredUserId }) => {


    const onMouseEnter = () => {
        handleMouseEnter(index)
    }

    const onMouseLeave = () => {
        handleMouseLeave(index)
    }

    const saveFavorite = () => {
        handleSaveFavUsers(index)
    }


    return (
        < S.User
            key={index}
            ref={lastUser}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <S.UserPicture src={user?.picture.large} alt="profile picture" />
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
            <S.IconButtonWrapper isVisible={index === hoveredUserId || favUser}>
                <IconButton onClick={saveFavorite}>
                    <FavoriteIcon color="error" />
                </IconButton>
            </S.IconButtonWrapper>
        </S.User >
    )
}


export default User