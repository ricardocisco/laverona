import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonTypeStyleProps = "PRIMARY" | "GHOST";
export type ButtonSizeStyleProps = "SMALL" | "MEDIUM" | "LARGE";
export type ButtonColorStyleProps = "WHITE" | "RED";

type Props = {
  type: ButtonTypeStyleProps;
};

type SizeProps = {
  iconSize: ButtonSizeStyleProps;
  colorStyle: ButtonColorStyleProps;
};

export const Button = styled(TouchableOpacity)<Props>`
  padding: 6px;

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

export const IconButton = styled(MaterialIcons).attrs<SizeProps>(
  ({ theme, iconSize, colorStyle }) => {
    const size =
      iconSize === "SMALL"
        ? 18
        : iconSize === "MEDIUM"
        ? 22
        : iconSize === "LARGE"
        ? 30
        : 22;

    return {
      size: size,
      color: colorStyle === "WHITE" ? theme.COLORS.WHITE : theme.COLORS.RED_100
    };
  }
)<SizeProps>``;
