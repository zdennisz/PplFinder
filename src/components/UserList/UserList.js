import React, { useEffect, useState } from "react";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import User from "components/User";
import { PPL_TO_SAVE } from "constant";
import * as S from "./style";

const UserList = ({ users, isLoading, lastUser }) => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [hoveredUserId, setHoveredUserId] = useState({});
  const [favUsers, setFavUsers] = useState({})
  const [filters, setFilters] = useState({})


  const handleMouseEnter = (index) => {
    setHoveredUserId(index)
  };

  const handleMouseLeave = (index) => {
    setHoveredUserId();
  };

  const saveFavUsers = (index) => {
    const indexOfHovered = index.toString()
    setFavUsers(state => { return { ...state, [indexOfHovered]: state[indexOfHovered] ? false : true } });

  }

  const checkBoxHandleChange = (val) => {
    setFilters(state => {
      return { ...state, [val]: state[val] ? false : true }
    });
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
    const fUsers = users.filter(user => !filters[user.nat])
    setFilteredUsers(fUsers)
  }, [filters, users])


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
        {filteredUsers.map((user, index) => {

          return (
            <User
              index={index}
              user={user}
              filteredUsers={filteredUsers}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              hoveredUserId={hoveredUserId}
              favUsers={favUsers}
              saveFavUsers={saveFavUsers}
              lastUser={index + 1 === filteredUsers.length ? lastUser : null} />
          )
        })}
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
