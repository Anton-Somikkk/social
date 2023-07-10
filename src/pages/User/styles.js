import styled from "styled-components";

export const MainCenterBlock = styled.div`
  width: auto;
  margin-top: 30px;
`;

export const PostsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  max-height: 75vh;
`;

export const LogoImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const UserBlock = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;
  flex-wrap: wrap;
`;

export const UserBlockVertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const UserTitleText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: black;
`;
export const UserText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: black;
`;
export const SpinnerBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 65vh;
`;