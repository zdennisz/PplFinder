import React from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import { usePeopleFetch } from "hooks";
import * as S from "./style";

//https://randomuser.me/api/?results=1

const Users = () => {
  const { users, isLoading } = usePeopleFetch();

  return (
    <S.Users>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Fetch Users
          </Text>
        </S.Header>
        <S.UsersData>
          {users.map((user) => {
            return (
              <S.User>
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
              <Spinner
                color="primary"
                size="45px"
                thickness={5}
                variant="indeterminate"
              />
            </S.SpinnerWrapper>
          )}
        </S.UsersData>
      </S.Content>
    </S.Users>
  );
};

{
  /* <S.User key={user.id.value}>
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
</S.User> */
}

export default Users;

//Create the spinner component
//Navbar

// Task
// Automatically loads the first 25 records
//The applicant needs to:
//1:
////Add infinity scroll
////*Possible bonus / Live Interview - Virtualization
////Make use of the Spinner component

//2:
////Add filters by:
//////Gender
//////Nationalities: [US, IE]

//3:
////Favorite:
//////Implement the favorite button click functionality
//////Implement a favorite users page

//4:
////Implement routing logic on top of existing UI implementation
