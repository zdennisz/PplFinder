import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { PPL_TO_SAVE } from "constant";
import * as S from "./style";

const UserList = ({ users, isLoading, lastPersonRef }) => {
  const [fileredUsers, setFilteredUsers] = useState();
  const [hoveredUserId, setHoveredUserId] = useState({});
  const [favUsers, setFavUsers] = useState({})
  const [filters, setFilters] = useState({})

  const handleMouseEnter = (index) => {
    setHoveredUserId(index)
  };

  const handleMouseLeave = (index) => {
    setHoveredUserId();
  };
  const checkBoxHandleChange = (val) => {
    setFilters(state => {
      return { ...state, [val]: state[val] ? false : true }
    });

  }
  const saveFavUsers = (index) => {
    const indexOfHovered = index.toString()
    setFavUsers(state => { return { ...state, [indexOfHovered]: state[indexOfHovered] ? false : true } });

  }

  useEffect(() => {
    if (favUsers && JSON.stringify(favUsers) !== '{}') {

      const pplToSave = users.filter(function (e, index) {
        if (favUsers[index]) {
          return true
        } else {
          return false
        }
      })
      localStorage.setItem(PPL_TO_SAVE, JSON.stringify(pplToSave))
    }
  }, [favUsers]);



  useEffect(() => {
    setFilteredUsers(users.map((user, index) => {
      if (filters[user.nat]) {
        // We filter the user out
        return null
      } else {
        return (
          <>
            {(index + 1 === users.length) ?
              <S.User
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                ref={lastPersonRef} >
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
                <S.IconButtonWrapper isVisible={index === hoveredUserId || favUsers[index]}>
                  <IconButton onClick={() => saveFavUsers(index)}>
                    <FavoriteIcon color="error" />
                  </IconButton>
                </S.IconButtonWrapper>
              </S.User>
              :
              <S.User
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}>

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
                <S.IconButtonWrapper isVisible={index === hoveredUserId || favUsers[index]}>
                  <IconButton onClick={() => saveFavUsers(index)}>
                    <FavoriteIcon color="error" />
                  </IconButton>
                </S.IconButtonWrapper>
              </S.User>
            }
          </>

        );
      }

    }))


  }, [filters, users, hoveredUserId])


  return (
    <S.UserList>
      <S.Filters>
        <CheckBox value="BR" label="Brazil" onChange={checkBoxHandleChange} />
        <CheckBox value="AU" label="Australia" onChange={checkBoxHandleChange} />
        <CheckBox value="CA" label="Canada" onChange={checkBoxHandleChange} />
        <CheckBox value="DE" label="Germany" onChange={checkBoxHandleChange} />
        <CheckBox value="GB" label="United Kingdom" onChange={checkBoxHandleChange} />
      </S.Filters>
      <S.List>
        {fileredUsers}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
