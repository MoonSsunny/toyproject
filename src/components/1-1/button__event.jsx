import React, { useState } from "react";
import styled from "styled-components";
import Button from "./button";

const StyledContent = styled.div`
  font-size: ${(props) => {
    if (props.number > 0) {
      return `${props.number}px`;
    } else return "1px";
  }};
`;

const StyledButton = styled.div`
  position: absolute;
  display: flex;
  bottom: 30px;
  right: 60px;
  width: 150px;
`;

const ButtonEvent = () => {
  const [number, setNumber] = useState(15);

  const clickPlus = () => {
    setNumber(number + 1);
  };
  const clickMinus = () => {
    if (number <= 0) {
      setNumber(1);
    } else setNumber(number - 1);
  };

  return (
    <>
      <StyledContent number={number}>
        <p>
          This example demonstrates how a navigation menu on a mobile/smart
          phone could look like. Click on the hamburger menu (three bars) in the
          top right corner, to toggle the menu.
        </p>
      </StyledContent>
      <StyledButton>
        <Button onClick={clickPlus}> + </Button>
        <Button onClick={clickMinus}> - </Button>
      </StyledButton>
    </>
  );
};

export default ButtonEvent;
