import styled from "styled-components";

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: #e5e7e9;
  &:hover {
  }
`;

export const PostTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
`;

export const PostBlock = styled.div``;
export const PostBlockVertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const PostTitleImg = styled.img`
  width: 150px;
  height: 150px;
  cursor: pointer;
`;
export const PostTitleText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: black;
`;
export const PostText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: black;
`;

export const CommentBlock = styled.div`
display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
`;

export const CommentsText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: grey;
`;

export const CommentsTitleText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-decoration: underline;
  color: black;
`;