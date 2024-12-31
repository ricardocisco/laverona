import themes from "@/themes/themes";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type FilterStylesProps = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<FilterStylesProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${themes.COLORS.GREEN_100};
    `}

  background-color: ${themes.COLORS.GRAY_600};

  border-radius: 4px;
  margin-right: 12px;

  height: 40px;
  width: 80px;

  margin-bottom: 10px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${themes.FONT_SIZE.SM_PLUS}px;
    color: ${theme.COLORS.WHITE};
  `};
`;
