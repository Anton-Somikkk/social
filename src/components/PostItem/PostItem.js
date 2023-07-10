import * as S from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getUserId,
  getPostTitle,
  getPostId,
  getPostBody,
} from "../../Slices/postSlice";
import { useGetUsersQuery, useGetPostCommentsQuery } from "../../services/api";
import { Button } from "react-bootstrap";
import userLogo from "../../img/user.png";

export default function PostItem({ id, userId, title, body }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: usersData } = useGetUsersQuery({
    userId: userId,
  });

  const { data: commentsData } = useGetPostCommentsQuery({
    postId: id,
  });

  const handleClick = () => {
    dispatch(getUserId(userId));
    dispatch(getPostTitle(title));
    dispatch(getPostId(id));
    dispatch(getPostBody(body));
    localStorage.setItem("userId", userId);
    navigate("/user");
  };

  const [visibleComments, setVisibleComments] = useState(false);

  const toggleVisibility = () => setVisibleComments(!visibleComments);

  return (
    <S.PostWrapper>
      <S.PostBlockVertical>
        <S.PostBlock>
          <S.PostTitleImg
            src={userLogo}
            area-label="user"
            onClick={() => handleClick()}
          />
        </S.PostBlock>
        <S.PostBlock>
          <S.PostText>{usersData?.name}</S.PostText>
        </S.PostBlock>
      </S.PostBlockVertical>

      <S.PostBlockVertical>
        <S.PostBlock>
          <S.PostTitleText>{title}</S.PostTitleText>
        </S.PostBlock>
        <S.PostBlock>
          <S.PostText>{body}</S.PostText>
        </S.PostBlock>
        {visibleComments ? (
          <>
            <S.PostBlockVertical>
            <S.CommentsText>Комментарии:</S.CommentsText>
              {commentsData?.map(({ id, email, body }) => (
                <S.CommentBlock key={id}>
                  <S.CommentsTitleText>{email}</S.CommentsTitleText>
                  <S.CommentsText>{body}</S.CommentsText>
                </S.CommentBlock>
              ))}
            </S.PostBlockVertical>
            <Button variant="secondary" size="sm" onClick={toggleVisibility}>
              Скрыть комментарии
            </Button>
          </>
        ) : (
          <Button variant="secondary" size="sm" onClick={toggleVisibility}>
            Комментарии
          </Button>
        )}
      </S.PostBlockVertical>
    </S.PostWrapper>
  );
}
