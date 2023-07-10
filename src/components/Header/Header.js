import { Link, useNavigate } from "react-router-dom";

import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import * as S from "./styles";
import userLogo from "../../img/user.png";
export function Header() {
  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate(event.target.id);
  };

  return (
    <S.HeaderBlock>
      <S.UserBlock>
        <Link to="/about-me">
          <S.LogoImg src={userLogo} alt="logo" />
        </Link>
        <Link to="/about-me">
          <S.UserTitleText>Моё имя</S.UserTitleText>
        </Link>
      </S.UserBlock>
      <DropdownButton
        as={ButtonGroup}
        variant="secondary"
        id="dropdown-variants-secondary"
        title="Меню"
      >
        <Dropdown.Item id="/" onClick={(event) => handleClick(event)}>
          Список постов
        </Dropdown.Item>

        <Dropdown.Item id="/about-me" onClick={(event) => handleClick(event)}>
          Обо мне
        </Dropdown.Item>
      </DropdownButton>
    </S.HeaderBlock>
  );
}
