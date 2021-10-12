import React, { useEffect, useState, useRef } from "react";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import User from "components/User";
import * as S from "./style";

const UserList = ({ users, isLoading, lastUser, isFavList }) => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [hoveredUserId, setHoveredUserId] = useState({});
  const [favUsers, setFavUsers] = useState({})
  const [filters, setFilters] = useState({})
  const firstInit = useRef(true)

  const handleMouseEnter = (index) => {
    setHoveredUserId(index)
  };

  const handleMouseLeave = (index) => {
    setHoveredUserId();
  };

  const handleSaveFavUsers = (index) => {
    // Add user to the favorite state
    const uniqueId = filteredUsers[index].login.salt
    setFavUsers(state => { return { ...state, [`${uniqueId}`]: state[`${uniqueId}`] ? false : true } });
  }

  const checkBoxHandleChange = (val) => {
    // Set the filters to true/false 
    setFilters(state => {
      return { ...state, [val]: state[val] ? false : true }
    });
  }

  useEffect(() => {
    // Save the ppl which are added to favorite state
    if (favUsers && JSON.stringify(favUsers) !== '{}') {

      const pplToSave = filteredUsers.filter((user, index) => favUsers[user.login.salt])
      if (!isFavList || !firstInit.current) {
        window.dispatchEvent(new CustomEvent('storageItemSet',
          { cancelable: true, bubbles: true, detail: pplToSave }
        ))

      }

    }
  }, [favUsers]);

  useEffect(() => {
    // Filter out the users and if no filters are active then set all the users as filtered users
    const fUsers = users.filter(user => !filters[user.nat])
    if (fUsers.length === 0) {
      setFilteredUsers(users)
    } else {
      setFilteredUsers(fUsers)
    }
  }, [filters, users])

  useEffect(() => {
    // At first init make all the people as favorites since we are in favorite list
    if (isFavList && firstInit.current && filteredUsers.length !== 0) {
      let newState = {}

      filteredUsers.map((user, index) => {
        newState = { ...newState, [`${user.login.salt}`]: true }
      })
      setFavUsers(newState)
      firstInit.current = false
    }
  }, [filteredUsers])
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
              key={index}
              index={index}
              user={user}
              filteredUsers={filteredUsers}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              hoveredUserId={hoveredUserId}
              favUser={isFavList ? true : favUsers[user.login.salt]}
              handleSaveFavUsers={handleSaveFavUsers}
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
