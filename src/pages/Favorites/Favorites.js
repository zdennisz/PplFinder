import React from 'react'
import Text from "components/Text";
import UserList from "components/UserList";
import * as S from "./style";
import { useFavFetch } from "hooks";
import { PPL_TO_SAVE } from 'constant';
const Favorites = () => {
    const { users, isLoading } = useFavFetch(PPL_TO_SAVE);

    return (
        <S.Home>
            <S.Content>
                <S.Header>
                    <Text size="64px" bold>
                        Favorite Ppl
                    </Text>
                </S.Header>
                <UserList users={users} isLoading={isLoading} />
            </S.Content>
        </S.Home>



    );
}

export default Favorites