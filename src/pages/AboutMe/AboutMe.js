import userLogo from "../../img/user.png";
import * as S from "./styles";

export default function AboutMe() {
  return (
    <S.MainCenterBlock>
      <S.UserBlock>
        <S.LogoImg src={userLogo} alt="logo" />
        <S.UserBlockVertical>
          <S.UserBlock>
            <S.UserText>Пользователь:</S.UserText>
            <S.UserTitleText>Антон</S.UserTitleText>
          </S.UserBlock>
          <S.UserBlock>
            <S.UserText>День рождения:</S.UserText>
            <S.UserTitleText>20 июля</S.UserTitleText>
          </S.UserBlock>
          <S.UserBlock>
            <S.UserText>Почта:</S.UserText>
            <S.UserTitleText>kuvshinoffav@gmail.com</S.UserTitleText>
          </S.UserBlock>
          <S.UserBlock>
            <S.UserText>Город:</S.UserText>
            <S.UserTitleText>Волгоград</S.UserTitleText>
          </S.UserBlock>
        </S.UserBlockVertical>
      </S.UserBlock>
      <S.UserBlock>
        <S.UserBlockVertical>
          <S.UserText>О себе:</S.UserText>
          <S.UserTitleText>
            Я студент онлайн-курсов по профессии Web-разработчик от SkyPro. В
            настоящее время работаю в крупной компании в сфере энергетики. Решил
            освоить дополнительную профессию потому, что мне это интересно.
            Надеюсь получиться монетизировать полученные знания!{" "}
          </S.UserTitleText>
        </S.UserBlockVertical>
      </S.UserBlock>
    </S.MainCenterBlock>
  );
}
