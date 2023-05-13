import React, { useState } from "react";
import styled from "styled-components";
import Flex from "./Flex";
import Line from "./Line";

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  resize: none;
  color: ${(props) => props.color || props.theme.colors.primary};

  &:focus {
    outline: none;
  }
`;

const Console = ({ color, ...props }) => {
  const [lines, setLines] = useState(["C/users/StrikeJersey~%"]);

  const onKeyPress = (e) => {
    if (e.charCode == 13) {
      setLines([...lines, "C/users/StrikeJersey~%"]);
    }
  };
  return (
    <Flex>
      <Flex direction={"column"} margin="0 10px">
        {lines.map((line) => (
          <Line color={color}>{line}</Line>
        ))}
      </Flex>
      <StyledConsole onKeyPress={onKeyPress} color={color} />
    </Flex>
  );
};

export default Console;
