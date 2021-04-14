import { GoThreeBars } from "react-icons/go";
import styled from "styled-components";
import { useState } from "react";

const StyledNavbar = styled.nav`
  background-color: #4caf50;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0 200px;
  @media screen and (max-width: 768px) {
    padding: 0;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .active {
    width: 80px;
    background-color: #4caf50;
    color: white;
    @media screen and (max-width: 768px) {
      position: absolute;
      top: 40px;
      left: 20px;
    }
  }
`;

const StyledMenuItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    background: #000;
    margin-top: 100px;
    padding: 0;
    width: 100%;
    text-align: start;
  }
`;

const StyledMenuList = styled.div`
  list-style: none;
  margin: 30px;
  @media screen and (max-width: 768px) {
    padding: 0;
    display: ${(props) => (props.menuDisplay === false ? "none" : "block")};
  }
`;

// useState로 상태를 업데이트 해서 상태에 따라 display값을 보여주도록 한다

const StyledHambuerMenu = styled.div`
  font-size: 50px;
  display: none;
  cursor: pointer;
  height: 100px;
  width: 70px;
  background: #000;
  color: #ffff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 0px;

    .hamburger {
      position: relative;
      top: 20px;
    }
  }
`;

function Navbar() {
  const [menuDisplay, setMenuDisplay] = useState(false);

  const menus = [
    { name: "News", path: "#news", id: "news" },
    { name: "Contact", path: "#contact", id: "contact" },
    { name: "About", path: "#about", id: "about" },
  ];

  return (
    <StyledNavbar>
      <a href="#home" className="active">
        LOGO
      </a>
      <StyledMenuItem className="myLinks">
        {menus.map((menu) => {
          return (
            <a href={menu.path} key={menu.id}>
              <StyledMenuList menuDisplay={menuDisplay}>
                {menu.name}
              </StyledMenuList>
            </a>
          );
        })}
      </StyledMenuItem>
      <StyledHambuerMenu
        onClick={() => {
          setMenuDisplay(!menuDisplay);
        }}
      >
        <GoThreeBars className="hamburger" />
      </StyledHambuerMenu>
    </StyledNavbar>
  );
}

export default Navbar;
