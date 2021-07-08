import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";

//https://randomuser.me/api/?results=1

const Home = () => {
  const { users, isLoading } = usePeopleFetch();

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList users={users} isLoading={isLoading} />
      </S.Content>
    </S.Home>
  );
};

export default Home;

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
//////Implement the block button click functionality
//////Implement a favorite users page

//4:
////Implement routing logic on top of existing UI implementation
