import PostsList from "../../components/PostsList/PostsList";

import * as S from "./styles";

export default function Main() {
  
  
  return (
    <S.MainCenterBlock>
      <S.PostsBlock>
        <PostsList />
        </S.PostsBlock>
    </S.MainCenterBlock>
  );
}
