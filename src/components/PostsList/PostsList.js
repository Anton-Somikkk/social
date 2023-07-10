import { useState, useEffect } from "react";
import { useGetAllPostsQuery } from "../../services/api";
import PostItem from "../PostItem/PostItem";
import { Pagination, Spinner } from "react-bootstrap";
import * as S from "./styles";

export default function PostsList() {
  const { data, isSuccess, error } = useGetAllPostsQuery();

  // Pagination
  const [active, setActive] = useState(1);

  const toggleActive = (e) => {
    setActive(e.target.textContent);
  };

  let items = [];

  for (let number = 1; number <= data?.length / 20; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  // End Pagination

  const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsDelayed(true);
    }, 1000);

    return () => clearTimeout(delay);
  }, [data]);

  if (isSuccess && isDelayed) {
    return (
      <S.PostsList>
        <S.PaginationBlock>
          <Pagination size="sm" onClick={(e) => toggleActive(e)}>
            {items}
          </Pagination>
        </S.PaginationBlock>

        {data
          .slice(active * 20 - 20, active * 20)
          .map(({ id, userId, title, body }) => (
            <PostItem
              key={id}
              id={id}
              userId={userId}
              title={title}
              body={body}
            />
          ))}

        <S.PaginationBlock>
          <Pagination size="sm" onClick={(e) => toggleActive(e)}>
            {items}
          </Pagination>
        </S.PaginationBlock>
      </S.PostsList>
    );
  }
  if (error && isDelayed) {
    return (
      <S.PostsList>
        <S.SpinnerBlock>
          <p>Не получается получить данные с сервера</p>
        </S.SpinnerBlock>
      </S.PostsList>
    );
  }
  return (
    <S.PostsList>
      <S.SpinnerBlock>
        <Spinner animation="border" variant="primary" />
      </S.SpinnerBlock>
    </S.PostsList>
  );
}
