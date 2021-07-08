import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";

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

//Change Filters UI (Categories)

// Task
// Automatically loads the first 25 records
//The applicant needs to:

//1: -- Difficulty I
////Add filters by:
//////Gender
//////Nationalities: [BR, AU]

//2:
////Favorite: -- Difficulty II
//////Implement the favorite button click functionality
////////////Favorite users always show the heart icon
////////////Favorite users get saved into local storage
//////Implement a favorite users page which loads all favorites
////////////Clicking on the favorite button for the second time
////////////causes an "un-favorite" and removes from the favorite page

//3:
////Add infinity scroll -- Difficulty III
////Live Interview - Virtualization

//4:
////Implement routing logic on top of existing UI implementation
