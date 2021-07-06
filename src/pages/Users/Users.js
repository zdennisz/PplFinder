import React from "react";
import Text from "components/Text";
import { usePeopleFetch } from "hooks";
import * as S from "./style";

//https://randomuser.me/api/?results=1

const Users = () => {
  const { users, isLoading } = usePeopleFetch();

  console.log(isLoading);

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

//UNINSTALL REDUX
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
