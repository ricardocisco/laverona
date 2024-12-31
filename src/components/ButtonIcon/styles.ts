import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonTypeStyleProps = "PRIMARY" | "GHOST";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Button = styled(TouchableOpacity)<Props>`
  padding: 10px;

  ${({ type }) => {
    switch (type) {
      case "PRIMARY":
        return `
                border: 1px solid #2D2F33;
                border-radius: 8px;
            `;
      case "GHOST":
        return `
                border: none;
            `;
    }
  }}

  justify-content: center;
  align-items: center;
`;

export const IconButton = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE
}))``;
