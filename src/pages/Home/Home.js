import React, { useState, useRef, useCallback } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { useFavFetch, usePeopleFetch } from "hooks";
import * as S from "./style";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { users, isLoading } = usePeopleFetch(pageNumber);
  useFavFetch()

  const observer = useRef()
  const lastUser = useCallback(node => {
    if (isLoading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(observable => {
      if (observable[0].isIntersecting) {
        setPageNumber(prevNumber => prevNumber + 1)
      }
    })
    if (node) observer.current.observe(node)

  }, [isLoading])


  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList lastUser={lastUser} users={users} isLoading={isLoading} />
      </S.Content>
    </S.Home>
  );
};

export default Home;
