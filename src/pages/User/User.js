import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useGetUsersQuery, useGetUserPostsQuery } from "../../services/api";
import userLogo from "../../img/user.png";
import PostItem from "../../components/PostItem/PostItem";
import { Spinner, Button } from "react-bootstrap";
import * as S from "./styles";

export default function User() {
  const navigate = useNavigate();
  // const userId = useSelector((state) => state.post.userId);
  const userId = localStorage.getItem("userId");
  const {
    data: usersData,
    isSuccess: usersIsSuccess,
    error: usersDataError,
  } = useGetUsersQuery({
    userId: userId,
  });

  const {
    data: userPostsData,
    isSuccess: userPostsIsSuccess,
    error: userPostsError,
  } = useGetUserPostsQuery({
    userId: userId,
  });

  const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsDelayed(true);
    }, 1000);

    return () => clearTimeout(delay);
  }, [usersData]);

  const handleClick = (event) => {
    navigate("/");
  };

  if (isDelayed && usersIsSuccess && userPostsIsSuccess) {
    return (
      <S.MainCenterBlock>
        <S.PostsList>
          <S.UserBlock>
            <S.LogoImg src={userLogo} alt="logo" />
            <S.UserBlockVertical>
              <S.UserBlock>
                <S.UserText>Пользователь:</S.UserText>
                <S.UserTitleText>{usersData?.name}</S.UserTitleText>
              </S.UserBlock>
              <S.UserBlock>
                <S.UserText>Почта:</S.UserText>
                <S.UserTitleText>{usersData?.email}</S.UserTitleText>
              </S.UserBlock>
              <S.UserBlock>
                <S.UserText>Город:</S.UserText>
                <S.UserTitleText>{usersData?.address.city}</S.UserTitleText>
              </S.UserBlock>
            </S.UserBlockVertical>
            <Button variant="secondary" onClick={handleClick}>
              Назад
            </Button>
          </S.UserBlock>
          <S.UserTitleText>Посты пользователя:</S.UserTitleText>

          {userPostsData?.map(({ id, userId, title, body }) => (
            <PostItem
              key={id}
              id={id}
              userId={userId}
              title={title}
              body={body}
            />
          ))}
        </S.PostsList>
      </S.MainCenterBlock>
    );
  }
  if ((userPostsError || usersDataError) && isDelayed) {
    return (
      <S.MainCenterBlock>
        <S.PostsList>
          <S.SpinnerBlock>
            <p>Не получается получить данные с сервера</p>
          </S.SpinnerBlock>
        </S.PostsList>
      </S.MainCenterBlock>
    );
  }
  return (
    <S.MainCenterBlock>
      <S.PostsList>
        <S.SpinnerBlock>
          <Spinner animation="border" variant="primary" />
        </S.SpinnerBlock>
      </S.PostsList>
    </S.MainCenterBlock>
  );
}
