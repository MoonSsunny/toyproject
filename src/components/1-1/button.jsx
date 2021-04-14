import React from "react";
import styled from "styled-components";

const StyleButton = styled.button`
  display: inline-block;
  width: 100%;
  margin: 40px 10px;
  height: 40px;
  border: none;
  border-radius: 4px;
  background: #4caf50;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: #fff;
  outline: none;
  cursor: pointer;
`;

const Button = (props) => <StyleButton {...props} />;

export default Button;
